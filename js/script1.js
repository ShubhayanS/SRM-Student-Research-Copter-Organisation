var intFrameHeight = window.innerHeight;
var intFrameWidth = window.innerWidth;

    var config = {
      stage: {
        height: intFrameHeight,
        width: intFrameWidth
      },
      peaks: {
        count: 2,
        detail: 4,
        maxY: 250,
        minY: 100
      },
      valleys: {
        minY: 0
      },
      flats: [
        {
          name: 'platform1',
          width: 40,
          pos: 0.4
        },
        {
          name: 'platform2',
          width: 70,
          pos: 0.43,
          align: 'right'
        }
      ],
      fill: {
        color: '#ccc',
        gradient: {
          x1: '0%',
          y1: '50%',
          x2: '0%',
          y2: '100%',
          stops: [
            {
              offset: '0%',
              'stop-color': '#84e8ae'
            },
        
            {
              offset: '100%',
              'stop-color': '#4eced3'
            }
          ]
        }
      },
      shadow: {
        color: '#555',
        gradient: {
          x1: '0%',
          y1: '50%',
          x2: '0%',
          y2: '100%',
          stops: [
            {
              offset: '0%',
              'stop-color': '#d60404'
            },
            {
              offset: '70%',
              'stop-color': '#000'
            }
          ]
        }
      },
      ridge: {
        color: '#000',
        thickness: 5
      }
    };

    var Mountains = new SVGMountainRange();
    var svg = Mountains.create(config);
    document.getElementById("mountains").appendChild(svg);

$( document ).mousemove( function( e ) {
  $( '.drone' ).parallax( 8, e );
});
