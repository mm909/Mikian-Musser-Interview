$( document ).ready(function() {


      for(var i = 0; i < programs.length; i++){
        $temp = $( "<div class='Home-ProjectPill' id='Home-ProjectPill" + i + "' ></div>" )
        $( ".Home-ProjectPill-Container" ).append($temp);
        //--
            $temp =
            $( "<img class='Home-ProjectPill-Image' id='Home-ProjectPill-Image" +
            i
            + "' src=" + programs[i].imgpath + "></img>" )
            $( "#Home-ProjectPill" + i).append($temp);

            $temp = $( "<div class='Home-ProjectPill-Description' id='Home-ProjectPill-Description" + i + "' ></div>" )
            $( "#Home-ProjectPill" + i ).append($temp);
            //--

                $temp = $( "<div class='Home-ProjectPill-Title' id='title-container" + i + "' ></div>" )
                $( "#Home-ProjectPill-Description" + i ).append($temp);
                //--

                    $temp = $( "<a href=" + programs[i].filepath + " id='Home-ProjectPill-Title" + i + "' >" + programs[i].title + "</a>" )
                    $( "#title-container" + i ).append($temp);

                    $temp = $( "<div class='tag-Home' id='tag-Home" + i + "' ></div>" )
                    $( "#title-container" + i  ).append($temp);
                    //--

                        for(var j = 0; j < programs[i].tags.length; j++){
                          $temp = $( "<div class='tag-ProjectPill' id='tag-ProjectPill" + i + j + "' ></div>" )
                          $( "#tag-Home" + i  ).append($temp);

                              $temp = $( "<p class='" + "tag-" + programs[i].tags[j] + "'>" + programs[i].tags[j] + "</p>" )
                              $( "#tag-ProjectPill" + i + j  ).append($temp);
                        }

                $temp = $( "<div class='short-Description' id='short-Description" + i + "' ></div>" )
                $( "#Home-ProjectPill-Description" + i  ).append($temp);

                $temp = $( "<p>" + programs[i].shortDescription + "</p>" )
                $( "#Home-ProjectPill-Description" + i  ).append($temp);
      }

});