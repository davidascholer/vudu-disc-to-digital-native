/**
 * FACEBOOK SIGN IN 
 * 
 
 npm install --save react-native-fbsdk-next
 cd ios && pod install
 should install:
    Installing FBSDKCoreKit (9.0.1)
    Installing FBSDKLoginKit (9.0.1)
    Installing FBSDKShareKit (9.0.1)
    Installing react-native-fbsdk-next (4.0.0)

 Set up Facebook App: https://developers.facebook.com/

  *  *   *   *   *   *   *   *  *   *   *   *   *   *   *  *   *   *   *   *   *
  IOS:
 *  *   *   *   *   *   *   *  *   *   *   *   *   *   *  *   *   *   *   *   *

  Add to end of import in AppDelegate.m:
  #import <FBSDKCoreKit/FBSDKCoreKit.h>

  Add to (UIApplication *)application function:
    [[FBSDKApplicationDelegate sharedInstance] application:application
    didFinishLaunchingWithOptions:launchOptions];

  Add after (UIApplication *)application function:
    - (BOOL)application:(UIApplication *)app
                openURL:(NSURL *)url
                options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
    {
      if ([[FBSDKApplicationDelegate sharedInstance] application:app openURL:url options:options]) {
        return YES;
      }
      return NO;
    }

    i.e.
 *    *   *   * 
      - (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
        {
        #ifdef FB_SONARKIT_ENABLED
          InitializeFlipper(application);
        #endif
          
          [[FBSDKApplicationDelegate sharedInstance] application:application
          didFinishLaunchingWithOptions:launchOptions];

          RCTBridge *bridge = [[RCTBridge alloc] initWithDelegate:self launchOptions:launchOptions];
          RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                          moduleName:@"vudu_disc_to_digital"
                                                    initialProperties:nil];

          if (@available(iOS 13.0, *)) {
              rootView.backgroundColor = [UIColor systemBackgroundColor];
          } else {
              rootView.backgroundColor = [UIColor whiteColor];
          }

          self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
          UIViewController *rootViewController = [UIViewController new];
          rootViewController.view = rootView;
          self.window.rootViewController = rootViewController;
          [self.window makeKeyAndVisible];
          return YES;
        }

        - (BOOL)application:(UIApplication *)app
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
            {
              
              if ([[FBSDKApplicationDelegate sharedInstance] application:app openURL:url options:options]) {
                return YES;
              }
              
              return NO;
            }
 *    *   *   * 
 
 Create a new .swift file (keep it named file w Targets checked) and click Create Bridging Header when prompted
 
 Paste the following code before the last </dict>
    <key>NSAppTransportSecurity</key>
    <dict>
      <key>NSAllowsArbitraryLoads</key>
      <true/>
      <key>NSExceptionDomains</key>
      <dict>
      <key>localhost</key>
      <dict>
        <key>NSExceptionAllowsInsecureHTTPLoads</key>
        <true/>
      </dict>
      </dict>
    </dict>
      
      <key>CFBundleURLTypes</key>
      <array>
        <dict>
          <key>CFBundleURLSchemes</key>
          <array>
            <string>fb[APP_ID]</string>
          </array>
        </dict>
      </array>
      <key>FacebookAppID</key>
      <string>[APP_ID]</string>
      <key>FacebookDisplayName</key>
      <string>[DISPLAY_NAME]</string>
      <key>LSApplicationQueriesSchemes</key>
      <array>
        <string>fbapi</string>
        <string>fb-messenger-api</string>
        <string>fbauth2</string>
        <string>fbshareextension</string>
      </array>
 *  *   *   *   *   *   *   *  *   *   *   *   *   *   *  *   *   *   *   *   *
 Android:
 *  *   *   *   *   *   *   *  *   *   *   *   *   *   *  *   *   *   *   *   *
 In FB create Android platform section, add Google Play package name, Class Name, and Key Hashes
 Google Play package name: [PACKAGE_NAME] exp. com.package_name
 Class Name: [PACKAGE_NAME].MainActivity
 Key Hashes:  copy the SHA1 key given after running:
      cd android && keytool -keystore app/debug.keystore -list -v
      password: android

If it prompts you for Google Play Package Name, click Use this package name

In Android Manifest:
 Make sure <uses-permission android:name="android.permission.INTERNET" /> is in it
 also, add this line right above </application>
<activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
i.e.
  *   *   *
        </intent-filter>
      </activity>
      <activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />
    </application>
  *   *   *

After ...android:theme="@style/AppTheme> add:
  <meta-data android:name="com.facebook.sdk.ApplicationId" android:value="@string/facebook_app_id"/>
Then in the /android/app/src/main/res/values/strings.xml file add this line to it:
<string name="facebook_app_id">[APP_ID]</string>
 *  *   *   *   *   *   *   *  *   *   *   *   *   *   *  *   *   *   *   *   *
*/

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AccessToken, LoginManager } from 'react-native-fbsdk-next'
// import { FontAwesome } from '@expo/vector-icons';

export default function FacebookSignIn({ createAccount, style }) {

  const logIn = () => {
    LoginManager.logInWithPermissions(["public_profile", "email"]).then(
      async result => {
        if (result.isCancelled)
          return;

        const { accessToken } = await AccessToken.getCurrentAccessToken();
        const response = await fetch(`https://graph.facebook.com/me?fields=email,name&access_token=${accessToken}`);
        const jsonRes = await response.json();

        let { name, id, email } = jsonRes;
        const fullName = name ?
          name : "NA";
        const userID = id ?
          id : "NA";
        email = email ?
          email : "NA";

        createAccount(fullName, email, null, userID);

      },
      function (error) {
        alert("Login failed with error: " + error);
      }
    )
  }

  return (
    <TouchableOpacity
      activeOpacity={.8}
      onPress={() => logIn()}
      style={[style.container, styles.container]}
    >
      <Text style={styles.text}>Sign In With Facebook</Text>
      <Image
        style={[style.image, styles.image]}
        source={require('../../assets/images/facebook_icon_64.png')}
      />
    </TouchableOpacity>);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3b5998',
  },
  image: {
    borderRadius: 5,
    maxWidth: 64,
  },
  text: {
    color: '#fff'
  }
})