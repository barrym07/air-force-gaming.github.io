$(window).on('load', function() {
    $(document).ready(function(){
        $(".loader").hide();
        $(".header").show();
        $(".container").show();
        
        $('.modal').modal();
    
        $('.carousel-slider').carousel({
            fullWidth: true,
            indicators: true
        });

        setInterval(function() {
            $('.carousel-slider').carousel('next');
        }, 8000);

        $('#carousel-left').click(function(){
            $('.carousel-slider').carousel('prev');
        });
    
        $('#carousel-right').click(function(){
            $('.carousel-slider').carousel('next');
        });

        $.ajax({
            url: "https://api.twitch.tv/helix/streams?user_login=airforcegg",
            dataType: 'json',
            headers: {
              'Client-ID': 'v03767ozho0makpoty7a4r8mvu9iz7'
            },
            success: function(channel)
            {
                console.log(channel);
              if (channel["data"].length != 0)
              {
                $(".twitch").show();
              }
            }
        });
    });
});