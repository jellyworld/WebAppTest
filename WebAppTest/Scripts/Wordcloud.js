

$(document).ready(function () {

    createWordcloud('#wordcloudcontainer');
    wordcloudEventHandler();


    

});

function createWordcloud(container) {
    var dim = { width: 800, height: 500 };
    var fill = d3.scale.category20();
    function doRnd() {
        return 10 + Math.random() * 90;
    }
    console.log('math random: ' + Math.random());
    console.log(10 + Math.random() * 90);
    d3.layout.cloud().size([dim.width, dim.height])

      .words([
        ["the great", 99], ["laughter", 98], ["headphones", 95], ["chocolate", 92], ["Hello", 91], ["there", 86],
        ["and", 65], ["more", 64], ["what", 61], ["can", 55], ["you", 44], ["donatello", 41], ["barfolla", 33],
        ["squeegee", 22], ["marketing", 13], ["the great", 99], ["laughter", 98], ["headphones", 95], ["chocolate", 92], ["Hello", 91], ["there", 86],
        ["and", 65], ["more", 64], ["what", 61], ["can", 55], ["you", 44], ["donatello", 41], ["barfolla", 33],
        ["squeegee", 22], ["marketing", 13], ["the great", 99], ["laughter", 98], ["headphones", 95], ["chocolate", 92], ["Hello", 91], ["there", 86],
        ["and", 65], ["more", 64], ["what", 61], ["can", 55], ["you", 44], ["donatello", 41], ["barfolla", 33],
        ["squeegee", 22], ["marketing", 13], ["the great", 99], ["laughter", 98], ["headphones", 95], ["chocolate", 92], ["Hello", 91], ["there", 86],
        ["and", 65], ["more", 64], ["what", 61], ["can", 55], ["you", 44], ["donatello", 41], ["barfolla", 33],
        ["squeegee", 22], ["marketing", 13], ["the great", 99], ["laughter", 98], ["headphones", 95], ["chocolate", 92], ["Hello", 91], ["there", 86],
        ["and", 65], ["more", 64], ["what", 61], ["can", 55], ["you", 44], ["donatello", 41], ["barfolla", 33],
        ["squeegee", 22], ["marketing", 13], ["the great", 99], ["laughter", 98], ["headphones", 95], ["chocolate", 92], ["Hello", 91], ["there", 86],
        ["and", 65], ["more", 64], ["what", 61], ["can", 55], ["you", 44], ["donatello", 41], ["barfolla", 33],
        ["squeegee", 22], ["marketing", 13], ["the great", 99], ["laughter", 98], ["headphones", 95], ["chocolate", 92], ["Hello", 91], ["there", 86],
        ["and", 65], ["more", 64], ["what", 61], ["can", 55], ["you", 44], ["donatello", 41], ["barfolla", 33],
        ["squeegee", 22], ["marketing", 13], ["the great", 99], ["laughter", 98], ["headphones", 95], ["chocolate", 92], ["Hello", 91], ["there", 86],
        ["and", 65], ["more", 64], ["what", 61], ["can", 55], ["you", 44], ["donatello", 41], ["barfolla", 33],
        ["squeegee", 22], ["marketing", 13]].map(function (d) {
            return { text: d[0], size: d[1] / 2 };
        }))
      .padding(3) //padding around the words
      .rotate(function () { return ~ ~(Math.random() * 2) * 90; })
      .font("Calibri")
      .fontSize(function (d) { return d.size; })
      .on("end", draw)
      .start();

    function draw(words) {
        d3.select(container).append("svg")
            .attr("width", dim.width)
            .attr("height", dim.height)
            .append("g")
        //.attr("transform", "translate(150,150)")
            .attr("transform", "translate(400,250)") //this controls the canvas placement from top and side; adjust to fix clipping when height and width are modified
            .selectAll("text")
            .data(words)
            .enter().append("text")
            .style("font-size", function (d) { return d.size + "px"; })
            .style("font-family", "Impact")
            .style("fill", function (d, i) { return fill(i); })
            .attr("text-anchor", "middle")
            .attr("transform", function (d) {
                return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
            })
            .on("click", function (d) {
                //activated when one of the word items is clicked
                console.log(d.text);
                showWordDetails(d.text)
            })
            .text(function (d) { return d.text; console.log(d.text) });

    }
}

function wordcloudEventHandler() {
    $('#wordclouddetailscontainerclose').click(function () {
        $('#wordclouddetailscontainer').fadeOut(function () {
            $('#wordcloudcontainer').fadeIn();
        });
    });
}

function showWordDetails(item) {
    var container = $('#wordclouddetailscontainer');
    $('#wordcloudcontainer').fadeOut(function(){
        container.fadeOut(function () {
            $('#wordclouddetailscontainer h2').empty().append(item);
            container.fadeIn();
        });
    });
}