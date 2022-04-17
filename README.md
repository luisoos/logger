# IP Data to Discord Webhook

With this JavaScript program you can log the IP of someone visiting your website and send IP information to your Discord Webhook.


# 👀 Preview

<img src="https://media.discordapp.net/attachments/943973140604784670/965191071996981268/unknown.png" width="600px" alt="Example image.">
The country flag changes to the country where the IP is located!

<br>

# 🎬 Usage
## Method 1 (CDN):
Just copy this into your website and change the redirect and webhook URL:

```HTML
<!-- Copy this into the <head> -->
<meta http-equiv="refresh" content="3;url=MAINPAGE.html" /> 

...

<!-- Copy this into the end of <body> -->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script> 
<script src="https://cdn.jsdelivr.net/gh/luisoos/IP-Log-To-Discord-Webhook/index.js"></script>
<script>var webHookUrl = "YOUR_WEBHOOK_URL_HERE";</script>
```

## Method 2 (Local):

### Set up
Copy the project.

Change the variable `webHookURL` in [`index.js`](https://github.com/luisoos/IP-Log-To-Webhook/blob/main/index.js) to your URL.

### Redirect 
Let a user redirect to another site after the IP was logged.

Just add the following to your `<head>` in [`index.html`](https://github.com/luisoos/IP-Log-To-Webhook/blob/main/index.html):

```
<meta http-equiv="refresh" content="3;url=MAINPAGE.html" />
```

### Additional tip
If you want to, you can style the [`index.html`](https://github.com/luisoos/IP-Log-To-Webhook/blob/main/index.html) file, so it doesn't look too suspicious.


# 📑 Annotations
## License
This project is licensed under the [`MIT License`](https://github.com/luisoos/IP-Log-To-Webhook/blob/main/LICENSE).
## Discord Mobile Preview
<img src="https://media.discordapp.net/attachments/943973140604784670/965186137243148308/IMG_9823.png?width=471&height=683">
