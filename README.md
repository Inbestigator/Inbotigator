# Inbotigator
`Made by Inbestigator.`
- Feel free to make your own Discord bot with this code.

`HOW TO MAKE YOU OWN BOT WITH THIS CODE`

`1)` Go to [***this website***](https://discord.com/developers/applications)
- Click the `New Application` button and go through the whole creation process

`2)` Go to the `Bot` tab and click `Add Bot`, click the `Yes, Do It!` button
- Then press `Reset Token`
- Copy the token and store it somewhere safe, ***DO NOT LET ANYONE ELSE SEE IT*** (they could get access to your bot with it)

`3)` Go [***here***](https://nodejs.org)
- Press one of the green download buttons (I recommend the one on the left)
- Go through the installation process

`4)` While it installs go back [***here***](https://discord.com/developers/applications)
- Find the `OAuth2` tab
- Under that go to `URL Generator`
- Select the `▢ bot` option under SCOPES
- Click `▢ Administator` in the BOT PERMISSIONS menu
- Then click the `Copy` button under GENERATED URL

`5)` Paste the URL into your address bar
- Go through the bot installation process
- Close the tab

`6)` Go into the server you installed it into and copy the bot's ID
	
`7)` Press the `<> Code` button on this site
- Select either `Clone` (if you want to make your own Github repo) or `Download Zip` (to have it just on your computer)

`8)` Unzip and open up the code on your computer 
- Click on the `functions\handlers` folder
- Go into the `handleCommands` file
- Find the part where it says: `const clientId = "1046189896311775272";`
- Replace `1046189896311775272` with the bot ID you copied earlier
- Press Ctrl+S to save

`9)` Create a new file named `.env` in the general explorer
- In the `.env` file write: `token=<TOKEN>` (substitute <TOKEN> for the token you copied earlier)
- And Ctrl+S again

`10)` Press the `Terminal` button on the top left
- Click `New Terminal`

`11)` Click on the text box that appeared on the bottom
- Type `npm i discord.js discord-api-types @discordjs/rest dotenv chalk@4.1.2 mongoose`
- Type `node .` and press enter	

Good luck!
