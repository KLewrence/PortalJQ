
$(document).ready(
    function () {

        var cards = [
            cardObj1 = {
            image: 'assets/img/defaultPic.jpg',
            title: 'Card Title A',
            cover: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            size: 1
            },

            cardObj2 = {
            image: 'assets/img/defaultPic.jpg',
            title: 'Card Title B',
            cover: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
            size: 1
            },

            cardObj3 = {
                image: 'assets/img/defaultPic.jpg',
                title: 'Card Title C',
                cover: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                size: 2
            },

            cardObj4 = {
                image: 'assets/img/defaultPic.jpg',
                title: 'Card Title D',
                cover: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                size: 1
            },

            cardObj5 = {
                image: 'assets/img/defaultPic.jpg',
                title: 'Card Title E',
                cover: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                size: 1
            },

            cardObj6 = {
                image: 'assets/img/defaultPic.jpg',
                title: 'Card Title F',
                cover: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                size: 2
            },
            cardObj7 = {
                image: 'assets/img/defaultPic.jpg',
                title: 'Card Title G',
                cover: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                size: 1
            },

            cardObj8 = {
                image: 'assets/img/defaultPic.jpg',
                title: 'Card Title H',
                cover: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                size: 1
            },

            cardObj9 = {
                image: 'assets/img/defaultPic.jpg',
                title: 'Card Title I',
                cover: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                size: 2
            },
            cardObj10 = {
                image: 'assets/img/defaultPic.jpg',
                title: 'Card Title J',
                cover: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
                size: 2
            }

        ]

        for ( i= 0; i < cards.length ; i++ ){
            generateGridItem (cards[i])

        }


        $('.grid').masonry({
            // options
            columnWidth: '.grid-sizer',
            itemSelector: '.grid-item',
            percentPosition: true
        });

        function generateGridItem ( cardObject ){
            var content = ""
            var size = ""
            var card = generateCard (cardObject)

            if (cardObject.size == 2) size ="grid-item--width2"
            else size = ""

            content += '<div class='+'"'+'grid-item '+ size +'"'+'>'
                +'<div class='+'"'+'grid-item-content'+'"'+'>'
                + card
                + '</div>'
                + '</div>'

            $('.grid').append(content)    
        }

        function generateCard ( cardObject) {
           

            var content = ""
            content += '<div class= ' + '"' + 'card cardMargin colNoPadding' + '"' + '>'
                + '<a href = ' + '"' + 'pages/postView.html' + '"' + ' >'
                + '<img class=' + '"' + 'card-img-top' + '"' + ' src=' + '"' + cardObject.image + '"' + ' alt=' + '"' + 'Unavailable resource' + '"' + '>'
                + '<div class=' + '"' + 'card-body' + '"' + '>'
                + '<h4 class=' + '"' + 'card-title' + '"' + '>' + cardObject.title + '</h4>'
                + '<p class=' + '"' + 'card-text' + '"' + '>' + cardObject.cover + '</p>'
                + '</div>'
                + '</a>'
                + '</div >'

            return content

           // $('.grid-item-content').append(content)

        }

       


    }





























);

