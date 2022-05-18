var columns = document.getElementById("ghx-column-headers");
alert(columns);



    //data-id "Done" = 1199
    //data-id "Verifying in Production" = 1232
    //data-id "Ready to Migrate" = 1218

    //need to get the data-id field from the header (#ghx-column-headers), then 
    //find all (.ghx-column) where data-column-id = data-id
    //add style="display:none"

    //and vice versa

    //<li class="ghx-column ghx-narrow-card ghx-xtra-narrow-card" data-id="1232">
    //<div class="ghx-column-header-flex">
    //<div class="ghx-column-header-flex-1">
    //<h2 data-tooltip="Verifying in Production">Verifying in Production</h2></div></div></li>