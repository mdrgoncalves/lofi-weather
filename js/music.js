function onYouTubeIframeAPIReady() {

    const e = document.getElementById("youtube-audio"); 
    const t = document.createElement("img");
    const icon = document.getElementById("icon-play");

    t.setAttribute("id","youtube-icon"),
    t.style.cssText="cursor:pointer;cursor:hand",
    e.appendChild(t);
    
    var a = document.createElement("div");
    a.setAttribute("id","youtube-player"),
    e.appendChild(a);

    var o = function(e) {
        var a = e ? "IDzX9gL.png":"quyUPXN.png";
        t.setAttribute("src","https://i.imgur.com/" + a)
    };

    e.onclick = function() {
        if (r.getPlayerState() === YT.PlayerState.PLAYING || r.getPlayerState() === YT.PlayerState.BUFFERING) {
            r.pauseVideo();
            o(!1);
            icon.classList.remove("fa-circle-pause");
            icon.classList.add("fa-circle-play");
        } else {
            r.playVideo();
            o(!0);
            icon.classList.remove("fa-circle-play");
            icon.classList.add("fa-circle-pause");
        }
    };
    
    var r = new YT.Player ("youtube-player",{
        height: "0",
        width: "0",
        videoId: e.dataset.video,
        playerVars: {
            autoplay: e.dataset.autoplay,
            loop: e.dataset.loop,
        },
        events: {
            onReady: function(e) {
                r.setPlaybackQuality("small"),
                r.setVolume(25),
                o(r.getPlayerState() !== YT.PlayerState.CUED)
            },
            onStateChange: function(e) {
                e.data === YT.PlayerState.ENDED && o(!1)
            }
        }
    });
}