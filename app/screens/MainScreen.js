
import React, { useEffect, useRef, useState } from 'react';
import { Image, Text, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import AppBackground from '../components/AppBackground';
import AppText from '../components/AppText';
import SideNavigationMenu from '../components/SideNavigationMenu';
import MovieItem from '../components/MovieItem';
import Picker from '../components/Picker';
import FilterDialogue from '../components/FilterDialogue';
import ScrollViewWithScrollEndListener from '../components/ScrollViewWithScrollEndListener';
import ActiveFiltersBar from '../components/ActiveFiltersBar';
import TokenCountView from '../components/TokenCountView';

import getMovies from '../controller/getMovies';
import signInServices from '../controller/signInServices';

import { colorTheme } from '../config/colors';
import { CONSTANTS } from '../config/constants';

//12631 titles

const MainScreen = ({ navigation }) => {
  const [signedIn, setSignedIn] = useState(false);
  const [sortViewOpen, setSortViewOpen] = useState(false);
  const [moviePosition, setMoviePosition] = useState(0);
  const [movieList, setMovieList] = useState([]);
  const [emptyMovieMsg, setEmptyMovieMsg] = useState("fetching movies");
  const [isSubscribed, setIsSubscribed] = useState(true);

  //Filters
  const [genreFilter, setGenreFilter] = useState("");
  const [formatFilter, setFormatFilter] = useState("");
  const [ratingFilter, setRatingFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [searchBarFilter, setSearchBarFilter] = useState("");

  const scrollRef = useRef();

  useEffect(() => {
    getUserContent();
  }, []);

  const getUserContent = async () => {
    const user = await signInServices.getUser();
    if (user)
      if (user.jwt)
        setSignedIn(true);
  }

  useEffect(() => {
    setMovies(0);
  }, [genreFilter, formatFilter, ratingFilter, yearFilter])

  useEffect(() => {
    //If the user goes 1.5 seconds without typing, query the input.
    const searchTimeout = setTimeout(() => {
      setMovies(0);
    }, 1500);

    return () => {
      clearTimeout(searchTimeout);
      setIsSubscribed(false);
    }
  }, [searchBarFilter]);

  const handleSortPressed = () => {
    setSortViewOpen(!sortViewOpen);
  }

  const hanldeFilterSelected = (filter, filterParent) => {
    const key = filterParent.toLowerCase();
    if (key === "genre")
      setGenreFilter(filter);
    if (key === "format")
      setFormatFilter(filter);
    if (key === "rating")
      setRatingFilter(filter);
    if (key === "year")
      setYearFilter(filter);
  }

  const handleFilterCancel = filter => {
    const key = Object.keys(filter)[0].toLowerCase();
    if (key === "genre")
      setGenreFilter("");
    if (key === "format")
      setFormatFilter("");
    if (key === "rating")
      setRatingFilter("");
    if (key === "year")
      setYearFilter("");
  }

  const handleScrollBeg = () => {
    if (moviePosition !== 0) {
      let tempMoviePos = moviePosition - CONSTANTS.LOAD_VALUE;
      if (tempMoviePos < 0)
        tempMoviePos = 0;
      setMovies(tempMoviePos);
    }

  }

  const handleScrollEnd = () => {
    if (movieList.length === CONSTANTS.LOAD_MAX) {
      const tempMoviePos = moviePosition + CONSTANTS.LOAD_VALUE;
      setMovies(tempMoviePos);
    }
  }

  const scrollToTop = () => {
    scrollRef.current?.scrollTo({
      y: 0,
      animated: false,
    });
  }

  const setMovies = async movieIndex => {
    const movies = await getMovies(searchBarFilter, movieIndex, genreFilter, formatFilter, ratingFilter, yearFilter);

    if (movies.error)
      return setEmptyMovieMsg(movies.error + '\npull down to reload');

    if (isSubscribed) {
      setMovieList(movies);
      setMoviePosition(movieIndex);
      scrollToTop();
    }
  }

  return (
    <>
      <AppBackground>
        <View style={styles.topContainer}>
          <SideNavigationMenu initialRender={true} shown={true} navigation={navigation} />
          <View style={styles.searchBarContainer}>
            <Image style={styles.searchBarImage} source={require('../assets/images/searchicon.png')} />
            <TextInput
              style={styles.searchBar}
              onChangeText={setSearchBarFilter}
              value={searchBarFilter}
            />
            <View style={styles.pickerContainer}>
              <Picker style={styles.picker} placeholder={"Filter"} open={sortViewOpen} onPress={handleSortPressed} />
            </View>
          </View>
        </View>
        {sortViewOpen &&
          <FilterDialogue style={styles.filterView} onPress={hanldeFilterSelected} />
        }
        {(genreFilter !== "" || formatFilter !== "" || ratingFilter !== "" || yearFilter !== "") &&
          <ActiveFiltersBar genre={genreFilter} format={formatFilter} rating={ratingFilter} year={yearFilter} onPress={handleFilterCancel} />
        }
        <ScrollViewWithScrollEndListener
          scrollRef={scrollRef}
          style={styles.scrollView}
          onScrollBeg={handleScrollBeg}
          onScrollEnd={handleScrollEnd}
        >
          {movieList.length > 0 && movieList.map((movie, index) => (
            <MovieItem key={index}
              movie={movie}
              onPress={() => navigation.navigate('MovieScreen', { movie })}
            />
          ))}
          {movieList.length === 0 &&
            <Text style={{ textAlign: 'center', color: '#fff' }}>{emptyMovieMsg}</Text>
          }
        </ScrollViewWithScrollEndListener>
      </AppBackground>
      <TokenCountView style={styles.tokenView} navigation={navigation} signedIn={signedIn}></TokenCountView>

    </>
  )
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

export default MainScreen;
