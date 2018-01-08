
$(document).ready(
    function () {

        var counter = 0
        var scrollHeight = $(document).height();
        var scrollPosition = $(window).height() + $(window).scrollTop();
        var $grid = $('.grid');

        //console.log( "scroll height: " + scrollHeight)
        //console.log( "scroll position: " + scrollPosition)

        var cards = [
            note1 = new noteCard (1,"Card A","https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e35/c62.0.516.516/21480410_105556150186626_747531889568382976_n.jpg","Some Text"),
            note2 = new noteCard (2,"Card B","https://pbs.twimg.com/media/BqUxWoiCIAAAK7y.jpg","Some Text"),
            note3 = new noteCard (1,"Card C","https://i.pinimg.com/236x/d6/3c/70/d63c70ed5bda7cb63829a226402c76a2--visual-kei-image.jpg","Some Text"),
            note4 = new noteCard (1,"Card D","https://www.suruga-ya.jp/database/pics/game/g4240285.jpg","Some Text"),
            note4 = new noteCard (2,"Card E","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/12716538_1172619306081968_2098113428_n.jpg?ig_cache_key=MTE5MjI4OTU5ODkzMzE0NDg5NA%3D%3D.2","Some Text"),
            note4 = new noteCard (2,"Card F","http://i1.jpopasia.com/assets/1/30581-takemasakujou-cj06.jpg","Some Text"),
            note4 = new noteCard (1,"Card G","https://i.pinimg.com/736x/fd/e5/b3/fde5b34509405019a083ced72b97e447--meto-mejibray-unicorn.jpg","Some Text"),
            note4 = new noteCard (2,"Card H","https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/24254276_1969572936614846_8583576803451338752_n.jpg","Some Text"),
            note4 = new noteCard (2,"Card I","https://pbs.twimg.com/profile_images/520237600657780736/MRCYFL6A.jpeg","Some Text"),
            note4 = new noteCard (2,"Card J","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.89.710.710/13398359_1182993625064593_553940369_n.jpg?ig_cache_key=MTI2OTkwNDQ1MTY0MDE0NzU4OQ%3D%3D.2.c","Some Text"),
            note1 = new noteCard (1,"Card K","https://i.pinimg.com/originals/db/25/23/db252321bae24e5e94ff068b81fb3c54.jpg","Some Text"),
            note2 = new noteCard (2,"Card L","https://visualioner.files.wordpress.com/2017/10/dm5lp6nvoaarl57.jpg?w=705&h=1059","Some Text"),
            note3 = new noteCard (1,"Card M","https://i.pinimg.com/originals/8b/96/34/8b9634f9d85efb3b5a7ab033801c6e6e.jpg","Some Text"),
            note4 = new noteCard (1,"Card N","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.130.1045.1045/19121650_102714086981405_3236425391325315072_n.jpg?ig_cache_key=MTUzNDg3ODYyMDg5OTg3ODIwNg%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card O","http://jame-world.com/_pic/pic/4810-a.jpg","Some Text"),
            note4 = new noteCard (2,"Card P","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.69.550.550/12231080_163404490677973_1959999226_n.jpg?ig_cache_key=MTExMzg2ODU5MjM2MTYwNDQ5MQ%3D%3D.2.c","Some Text"),
            note4 = new noteCard (1,"Card Q","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.94.750.750/18252714_274613259615004_8810384865187856384_n.jpg?ig_cache_key=MTUwODA0MjI1MDA1OTYzODc4OA%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card R","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c189.0.702.702/19424807_143925336158106_7019584588829687808_n.jpg?ig_cache_key=MTU0NDI0MTIwNzg1MTUwMTg0Ng%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card S","https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/25024420_376831636097512_8102300102749585408_n.jpg","Some Text"),
            note4 = new noteCard (2,"Card T","https://i.pinimg.com/originals/c0/06/c8/c006c84be970b2a56dbf9df0ca80f3a9.jpg","Some Text"),
            note1 = new noteCard (1,"Card A","https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e35/c62.0.516.516/21480410_105556150186626_747531889568382976_n.jpg","Some Text"),
            note2 = new noteCard (2,"Card B","https://pbs.twimg.com/media/BqUxWoiCIAAAK7y.jpg","Some Text"),
            note3 = new noteCard (1,"Card C","https://i.pinimg.com/236x/d6/3c/70/d63c70ed5bda7cb63829a226402c76a2--visual-kei-image.jpg","Some Text"),
            note4 = new noteCard (1,"Card D","https://www.suruga-ya.jp/database/pics/game/g4240285.jpg","Some Text"),
            note4 = new noteCard (2,"Card E","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/12716538_1172619306081968_2098113428_n.jpg?ig_cache_key=MTE5MjI4OTU5ODkzMzE0NDg5NA%3D%3D.2","Some Text"),
            note4 = new noteCard (2,"Card F","http://i1.jpopasia.com/assets/1/30581-takemasakujou-cj06.jpg","Some Text"),
            note4 = new noteCard (1,"Card G","https://i.pinimg.com/736x/fd/e5/b3/fde5b34509405019a083ced72b97e447--meto-mejibray-unicorn.jpg","Some Text"),
            note4 = new noteCard (2,"Card H","https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/24254276_1969572936614846_8583576803451338752_n.jpg","Some Text"),
            note4 = new noteCard (2,"Card I","https://pbs.twimg.com/profile_images/520237600657780736/MRCYFL6A.jpeg","Some Text"),
            note4 = new noteCard (2,"Card J","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.89.710.710/13398359_1182993625064593_553940369_n.jpg?ig_cache_key=MTI2OTkwNDQ1MTY0MDE0NzU4OQ%3D%3D.2.c","Some Text"),
            note1 = new noteCard (1,"Card K","https://i.pinimg.com/originals/db/25/23/db252321bae24e5e94ff068b81fb3c54.jpg","Some Text"),
            note2 = new noteCard (2,"Card L","https://visualioner.files.wordpress.com/2017/10/dm5lp6nvoaarl57.jpg?w=705&h=1059","Some Text"),
            note3 = new noteCard (1,"Card M","https://i.pinimg.com/originals/8b/96/34/8b9634f9d85efb3b5a7ab033801c6e6e.jpg","Some Text"),
            note4 = new noteCard (1,"Card N","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.130.1045.1045/19121650_102714086981405_3236425391325315072_n.jpg?ig_cache_key=MTUzNDg3ODYyMDg5OTg3ODIwNg%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card O","http://jame-world.com/_pic/pic/4810-a.jpg","Some Text"),
            note4 = new noteCard (2,"Card P","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.69.550.550/12231080_163404490677973_1959999226_n.jpg?ig_cache_key=MTExMzg2ODU5MjM2MTYwNDQ5MQ%3D%3D.2.c","Some Text"),
            note4 = new noteCard (1,"Card Q","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.94.750.750/18252714_274613259615004_8810384865187856384_n.jpg?ig_cache_key=MTUwODA0MjI1MDA1OTYzODc4OA%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card R","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c189.0.702.702/19424807_143925336158106_7019584588829687808_n.jpg?ig_cache_key=MTU0NDI0MTIwNzg1MTUwMTg0Ng%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card S","https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/25024420_376831636097512_8102300102749585408_n.jpg","Some Text"),
            note4 = new noteCard (2,"Card T","https://i.pinimg.com/originals/c0/06/c8/c006c84be970b2a56dbf9df0ca80f3a9.jpg","Some Text"),
            note1 = new noteCard (1,"Card A","https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e35/c62.0.516.516/21480410_105556150186626_747531889568382976_n.jpg","Some Text"),
            note2 = new noteCard (2,"Card B","https://pbs.twimg.com/media/BqUxWoiCIAAAK7y.jpg","Some Text"),
            note3 = new noteCard (1,"Card C","https://i.pinimg.com/236x/d6/3c/70/d63c70ed5bda7cb63829a226402c76a2--visual-kei-image.jpg","Some Text"),
            note4 = new noteCard (1,"Card D","https://www.suruga-ya.jp/database/pics/game/g4240285.jpg","Some Text"),
            note4 = new noteCard (2,"Card E","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/12716538_1172619306081968_2098113428_n.jpg?ig_cache_key=MTE5MjI4OTU5ODkzMzE0NDg5NA%3D%3D.2","Some Text"),
            note4 = new noteCard (2,"Card F","http://i1.jpopasia.com/assets/1/30581-takemasakujou-cj06.jpg","Some Text"),
            note4 = new noteCard (1,"Card G","https://i.pinimg.com/736x/fd/e5/b3/fde5b34509405019a083ced72b97e447--meto-mejibray-unicorn.jpg","Some Text"),
            note4 = new noteCard (2,"Card H","https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/24254276_1969572936614846_8583576803451338752_n.jpg","Some Text"),
            note4 = new noteCard (2,"Card I","https://pbs.twimg.com/profile_images/520237600657780736/MRCYFL6A.jpeg","Some Text"),
            note4 = new noteCard (2,"Card J","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.89.710.710/13398359_1182993625064593_553940369_n.jpg?ig_cache_key=MTI2OTkwNDQ1MTY0MDE0NzU4OQ%3D%3D.2.c","Some Text"),
            note1 = new noteCard (1,"Card K","https://i.pinimg.com/originals/db/25/23/db252321bae24e5e94ff068b81fb3c54.jpg","Some Text"),
            note2 = new noteCard (2,"Card L","https://visualioner.files.wordpress.com/2017/10/dm5lp6nvoaarl57.jpg?w=705&h=1059","Some Text"),
            note3 = new noteCard (1,"Card M","https://i.pinimg.com/originals/8b/96/34/8b9634f9d85efb3b5a7ab033801c6e6e.jpg","Some Text"),
            note4 = new noteCard (1,"Card N","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.130.1045.1045/19121650_102714086981405_3236425391325315072_n.jpg?ig_cache_key=MTUzNDg3ODYyMDg5OTg3ODIwNg%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card O","http://jame-world.com/_pic/pic/4810-a.jpg","Some Text"),
            note4 = new noteCard (2,"Card P","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.69.550.550/12231080_163404490677973_1959999226_n.jpg?ig_cache_key=MTExMzg2ODU5MjM2MTYwNDQ5MQ%3D%3D.2.c","Some Text"),
            note4 = new noteCard (1,"Card Q","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.94.750.750/18252714_274613259615004_8810384865187856384_n.jpg?ig_cache_key=MTUwODA0MjI1MDA1OTYzODc4OA%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card R","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c189.0.702.702/19424807_143925336158106_7019584588829687808_n.jpg?ig_cache_key=MTU0NDI0MTIwNzg1MTUwMTg0Ng%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card S","https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/25024420_376831636097512_8102300102749585408_n.jpg","Some Text"),
            note4 = new noteCard (2,"Card T","https://i.pinimg.com/originals/c0/06/c8/c006c84be970b2a56dbf9df0ca80f3a9.jpg","Some Text"),
            note1 = new noteCard (1,"Card A","https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e35/c62.0.516.516/21480410_105556150186626_747531889568382976_n.jpg","Some Text"),
            note2 = new noteCard (2,"Card B","https://pbs.twimg.com/media/BqUxWoiCIAAAK7y.jpg","Some Text"),
            note3 = new noteCard (1,"Card C","https://i.pinimg.com/236x/d6/3c/70/d63c70ed5bda7cb63829a226402c76a2--visual-kei-image.jpg","Some Text"),
            note4 = new noteCard (1,"Card D","https://www.suruga-ya.jp/database/pics/game/g4240285.jpg","Some Text"),
            note4 = new noteCard (2,"Card E","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/12716538_1172619306081968_2098113428_n.jpg?ig_cache_key=MTE5MjI4OTU5ODkzMzE0NDg5NA%3D%3D.2","Some Text"),
            note4 = new noteCard (2,"Card F","http://i1.jpopasia.com/assets/1/30581-takemasakujou-cj06.jpg","Some Text"),
            note4 = new noteCard (1,"Card G","https://i.pinimg.com/736x/fd/e5/b3/fde5b34509405019a083ced72b97e447--meto-mejibray-unicorn.jpg","Some Text"),
            note4 = new noteCard (2,"Card H","https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/24254276_1969572936614846_8583576803451338752_n.jpg","Some Text"),
            note4 = new noteCard (2,"Card I","https://pbs.twimg.com/profile_images/520237600657780736/MRCYFL6A.jpeg","Some Text"),
            note4 = new noteCard (2,"Card J","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.89.710.710/13398359_1182993625064593_553940369_n.jpg?ig_cache_key=MTI2OTkwNDQ1MTY0MDE0NzU4OQ%3D%3D.2.c","Some Text"),
            note1 = new noteCard (1,"Card K","https://i.pinimg.com/originals/db/25/23/db252321bae24e5e94ff068b81fb3c54.jpg","Some Text"),
            note2 = new noteCard (2,"Card L","https://visualioner.files.wordpress.com/2017/10/dm5lp6nvoaarl57.jpg?w=705&h=1059","Some Text"),
            note3 = new noteCard (1,"Card M","https://i.pinimg.com/originals/8b/96/34/8b9634f9d85efb3b5a7ab033801c6e6e.jpg","Some Text"),
            note4 = new noteCard (1,"Card N","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.130.1045.1045/19121650_102714086981405_3236425391325315072_n.jpg?ig_cache_key=MTUzNDg3ODYyMDg5OTg3ODIwNg%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card O","http://jame-world.com/_pic/pic/4810-a.jpg","Some Text"),
            note4 = new noteCard (2,"Card P","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.69.550.550/12231080_163404490677973_1959999226_n.jpg?ig_cache_key=MTExMzg2ODU5MjM2MTYwNDQ5MQ%3D%3D.2.c","Some Text"),
            note4 = new noteCard (1,"Card Q","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.94.750.750/18252714_274613259615004_8810384865187856384_n.jpg?ig_cache_key=MTUwODA0MjI1MDA1OTYzODc4OA%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card R","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c189.0.702.702/19424807_143925336158106_7019584588829687808_n.jpg?ig_cache_key=MTU0NDI0MTIwNzg1MTUwMTg0Ng%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card S","https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/25024420_376831636097512_8102300102749585408_n.jpg","Some Text"),
            note4 = new noteCard (2,"Card T","https://i.pinimg.com/originals/c0/06/c8/c006c84be970b2a56dbf9df0ca80f3a9.jpg","Some Text"),
            note1 = new noteCard (1,"Card A","https://scontent-ams3-1.cdninstagram.com/t51.2885-15/e35/c62.0.516.516/21480410_105556150186626_747531889568382976_n.jpg","Some Text"),
            note2 = new noteCard (2,"Card B","https://pbs.twimg.com/media/BqUxWoiCIAAAK7y.jpg","Some Text"),
            note3 = new noteCard (1,"Card C","https://i.pinimg.com/236x/d6/3c/70/d63c70ed5bda7cb63829a226402c76a2--visual-kei-image.jpg","Some Text"),
            note4 = new noteCard (1,"Card D","https://www.suruga-ya.jp/database/pics/game/g4240285.jpg","Some Text"),
            note4 = new noteCard (2,"Card E","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/e35/12716538_1172619306081968_2098113428_n.jpg?ig_cache_key=MTE5MjI4OTU5ODkzMzE0NDg5NA%3D%3D.2","Some Text"),
            note4 = new noteCard (2,"Card F","http://i1.jpopasia.com/assets/1/30581-takemasakujou-cj06.jpg","Some Text"),
            note4 = new noteCard (1,"Card G","https://i.pinimg.com/736x/fd/e5/b3/fde5b34509405019a083ced72b97e447--meto-mejibray-unicorn.jpg","Some Text"),
            note4 = new noteCard (2,"Card H","https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/24254276_1969572936614846_8583576803451338752_n.jpg","Some Text"),
            note4 = new noteCard (2,"Card I","https://pbs.twimg.com/profile_images/520237600657780736/MRCYFL6A.jpeg","Some Text"),
            note4 = new noteCard (2,"Card J","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.89.710.710/13398359_1182993625064593_553940369_n.jpg?ig_cache_key=MTI2OTkwNDQ1MTY0MDE0NzU4OQ%3D%3D.2.c","Some Text"),
            note1 = new noteCard (1,"Card K","https://i.pinimg.com/originals/db/25/23/db252321bae24e5e94ff068b81fb3c54.jpg","Some Text"),
            note2 = new noteCard (2,"Card L","https://visualioner.files.wordpress.com/2017/10/dm5lp6nvoaarl57.jpg?w=705&h=1059","Some Text"),
            note3 = new noteCard (1,"Card M","https://i.pinimg.com/originals/8b/96/34/8b9634f9d85efb3b5a7ab033801c6e6e.jpg","Some Text"),
            note4 = new noteCard (1,"Card N","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.130.1045.1045/19121650_102714086981405_3236425391325315072_n.jpg?ig_cache_key=MTUzNDg3ODYyMDg5OTg3ODIwNg%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card O","http://jame-world.com/_pic/pic/4810-a.jpg","Some Text"),
            note4 = new noteCard (2,"Card P","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.69.550.550/12231080_163404490677973_1959999226_n.jpg?ig_cache_key=MTExMzg2ODU5MjM2MTYwNDQ5MQ%3D%3D.2.c","Some Text"),
            note4 = new noteCard (1,"Card Q","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c0.94.750.750/18252714_274613259615004_8810384865187856384_n.jpg?ig_cache_key=MTUwODA0MjI1MDA1OTYzODc4OA%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card R","https://scontent-sea1-1.cdninstagram.com/t51.2885-15/s480x480/e35/c189.0.702.702/19424807_143925336158106_7019584588829687808_n.jpg?ig_cache_key=MTU0NDI0MTIwNzg1MTUwMTg0Ng%3D%3D.2.c","Some Text"),
            note4 = new noteCard (2,"Card S","https://scontent.cdninstagram.com/t51.2885-15/s320x320/e35/25024420_376831636097512_8102300102749585408_n.jpg","Some Text"),
            note4 = new noteCard (2,"Card T","https://i.pinimg.com/originals/c0/06/c8/c006c84be970b2a56dbf9df0ca80f3a9.jpg","Some Text")
       
        ]

        //generate first 5 cards
        var cardBoxes = ""
        for ( counter = 0 ; counter < 5 ; counter++ ){
            cardBoxes += cards[counter].newCard()
            //console.log ( "counter: " + counter)
        }

        $grid.append(cardBoxes) 

        $grid.imagesLoaded(function(){
            $grid.masonry({
                columnWidth: '.grid-sizer',
                itemSelector: '.grid-item',
                percentPosition: true
            });    
          });

        //show next 5 cards on scroll, only when scroll bar reaches the bottom
        $(window).scroll(
            function (){
                scrollHeight = $(document).height();
                scrollPosition = $(window).height() + $(window).scrollTop();
                
                /*
                console.log( "scroll height: " + scrollHeight)
                console.log( "scroll position: " + scrollPosition)
                console.log( "value : " + ((scrollHeight - scrollPosition) / scrollHeight))
                */

	            if ((scrollHeight - scrollPosition) / scrollHeight <= 0) 
                {
                    cardBoxes = ""
                    for ( i = 0 ; i < 5 ; i++ ){
                        if (counter < cards.length){
                            cardBoxes += cards[counter].newCard()
                            //console.log ( "counter: " + counter)
                            counter ++
                        }
                        else {
                            console.log ("no more elements to print")
                            break       
                        }  
                    }

                    if (cardBoxes != ""){
                        var $cardBoxes = $(cardBoxes);
                        $grid.append($cardBoxes) 
                        $grid.imagesLoaded( function(){
                            $grid.masonry( 'appended', $cardBoxes) 
                        });
                          
                    }
                }
            }
        )  


        function noteCard (size, title, picture, cover ) {
            this.size = size;
            this.sizeTag = this.size == 2 ? "grid-item--width2":"";
            this.title = title;
            this.picture = picture;
            this.cover = cover;
            this.newCard = function(){

                var cardContent = '<div class= ' + '"' + 'card cardMargin colNoPadding' + '"' + '>'
                + '<a href = ' + '"' + 'pages/postView.html' + '"' + ' >'
                + '<img class=' + '"' + 'card-img-top' + '"' + ' src=' + '"' + this.picture + '"' + ' alt=' + '"' + 'Unavailable resource' + '"' + '>'
                + '<div class=' + '"' + 'card-body' + '"' + '>'
                + '<h4 class=' + '"' + 'card-title' + '"' + '>' + this.title + '</h4>'
                + '<p class=' + '"' + 'card-text' + '"' + '>' + this.cover + '</p>'
                + '</div>'
                + '</a>'
                + '</div >'

                var cardBox = '<div class='+'"'+'grid-item '+ this.sizeTag +'"'+'>'
                +'<div class='+'"'+'grid-item-content'+'"'+'>'
                + cardContent
                + '</div>'
                + '</div>'

                return cardBox
            };

        }

       


    }





























);

