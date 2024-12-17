/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { RNAndroidNotificationListenerHeadlessJsName } from 'react-native-android-notification-listener'


/**
 * Note that this method MUST return a Promise.
 * Is that why I'm using a async function here.start --clear
 */
const headlessNotificationListener = async ({ notification }: any) => {
    // To check if the user has permission
const status = await RNAndroidNotificationListener.getPermissionStatus()
console.log(status) // Result can be 'authorized', 'denied' or 'unknown'

// To open the Android settings so the user can enable it
RNAndroidNotificationListener.requestPermission()
    /**
     * This notification is a JSON string in the follow format:
     *  {
     *      "app": string,
     *      "title": string,
     *      "titleBig": string,
     *      "text": string,
     *      "subText": string,
     *      "summaryText": string,
     *      "bigText": string,
     *      "audioContentsURI": string,
     *      "imageBackgroundURI": string,
     *      "extraInfoText": string,
     *      "groupedMessages": Array<Object> [
     *          {
     *              "title": string,
     *              "text": string
     *          }
     *      ]
     *  }
     */

    if (notification) {
        /**
         * Here you could store the notifications in a external API.
         * I'm using AsyncStorage here as an example.
         */
        console.log("Notification",notification);
    }
}

/**
 * AppRegistry should be required early in the require sequence
 * to make sure the JS execution environment is setup before other
 * modules are required.
 */
AppRegistry.registerHeadlessTask(
    RNAndroidNotificationListenerHeadlessJsName,
    () => headlessNotificationListener
)

AppRegistry.registerComponent(appName, () => App);
