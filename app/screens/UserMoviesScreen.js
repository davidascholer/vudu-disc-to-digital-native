import React, { useEffect, useState } from 'react';
import { Text, ScrollView, StyleSheet } from 'react-native';


import AppBackground from '../components/AppBackground';
import BackButton from '../components/BackButton';
import MovieItem from '../components/MovieItem';
import TokenCountView from '../components/TokenCountView';

import signInServices from '../controller/signInServices';
import getMoviesFromUPCs from '../controller/getMoviesFromUPCs';
import { colorTheme } from '../config/colors';

export default function UserMoviesScreen({ navigation }) {

    //Static constants
    const EMPTY_MOVIE_MESSAGE = "you haven't redeemed any tokens yet";

    const [movieList, setMovieList] = useState([]);
    const [emptyMovieMsg, setEmptyMovieMsg] = useState(EMPTY_MOVIE_MESSAGE);


    useEffect(() => {
        getUserContent();
    }, []);

    const getUserContent = async () => {
        const user = await signInServices.getUser();
        if (user.jwt)
            setMovies(user.redemptions);
        else
            navigation.replace('LoginScreen');
    }

    const handleMovieSelected = movie => {
        navigation.navigate('BarcodeScreen', { title: movie.title, upc: movie.upc })
    }

    const setMovies = async movieUPCs => {

        setEmptyMovieMsg("fetching movies");
        const movies = await getMoviesFromUPCs(movieUPCs);
        setEmptyMovieMsg(EMPTY_MOVIE_MESSAGE);

        if (movies.error)
            return setEmptyMovieMsg(movies.error);

        console.log(movies)
        setMovieList(movies);
    }

    return (
        <>
            <AppBackground>
                <BackButton navigation={navigation}/>
                <ScrollView>
                    {movieList.length > 0 && movieList.map((movie, index) => (
                        <MovieItem key={index}
                            movie={movie}
                            onPress={() => handleMovieSelected(movie)}
                        />
                    ))}
                    {movieList.length === 0 &&
                        <Text style={{ textAlign: 'center', color: '#fff' }}>{emptyMovieMsg}</Text>
                    }
                </ScrollView>
            </AppBackground>
        </>
    );
}

const styles = StyleSheet.create({
    bottomView: {
        position: 'absolute',
        bottom: 0,
    },
    filterView: {
        width: '100%',
    },
    pickerContainer: {
        flex: 2,
        marginHorizontal: 5,
    },
    searchBar: {
        borderBottomWidth: 1,
        borderColor: 'white',
        color: 'white',
        flex: 4,
        fontSize: 20,
        marginHorizontal: 5,
    },
    searchBarContainer: {
        alignItems: 'flex-end',
        flex: 4,
        flexDirection: 'row',
        marginHorizontal: 5,
    },
    searchBarImage: {
        width: 25,
        height: 25,
        tintColor: '#fff'
    },
    searchText: {
        fontStyle: 'italic',
        color: colorTheme.text,
        fontSize: 15,
        fontWeight: '700',
        marginHorizontal: 5,
    },
    scrollView: {
        flex: 4,
        // height:'80%'
    },
    tokenView: {

    },
    topContainer: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10,
        maxHeight: 60,
        paddingVertical: 10,
        zIndex: 1,
    },
})