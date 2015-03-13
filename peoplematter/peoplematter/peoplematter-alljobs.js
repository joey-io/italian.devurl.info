/* Fork and Knife - Tab Layout (No Map) Version 1.0  */

//Global Variables for Peoplematter
var sNoLocations = "Sorry, there are currently no openings available at this time.";
var sNoOpenings = "Sorry, there are currently no openings in this location.";
var sAlias = 'spoletousa';

//Global Variables for Page Load
var allLocations = [];

function getAllLocations(sAlias){
  jQuery.ajax({
      url: 'https://my.peoplematter.com/api/applicationbusinessunit/',
      data: 'alias=' + sAlias,
      type: 'GET',
      async: true, 
      dataType: 'jsonp',
      error: function ( jqXHR, textStatus, errorThrown ) {
          //alert('ERROR' + errorThrown);
      },
      beforeSend: function ( jqXHR ) {
        jQuery('#loading').show();
        allLocations = [];
      },
      success: function ( oData ) {
        allLocations = oData;
        if(!jQuery.isEmptyObject(allLocations)){
          jQuery('#all-locations').html('');

          allLocations = sortByKey(allLocations, "Name", "");

          for ( var oLocation in allLocations ) {

            if(allLocations[oLocation].Jobs == null){
                allLocations[oLocation].Jobs = "";
            }
            
            jQuery('#all-locations').append(' \
              <li> \
                <h2> \
                  <span class="text-wrapp-1"> \
                      <div class="address" data-id="' + allLocations[oLocation].Id + '" data-location="' + allLocations[oLocation].UnitNumber + '" data-link="' + allLocations[oLocation].ApplyUrl + '">' + 
                          allLocations[oLocation].Name.trim() + ' - ' + allLocations[oLocation].Address.StreetAddress1.trim() + ' ' + allLocations[oLocation].Address.City.trim() + ', ' + allLocations[oLocation].Address.State.trim() + ' ' + allLocations[oLocation].Address.ZipCode.trim()
                    + '</div> \
                  </span> \
                  <span class="button-wrapp-1"> \
                      <a class="view-opening main-view jobopeningbtn" id="JobOpening" data="' + allLocations[oLocation].Id + '">View Openings</a> \
                  </span> \
                </h2> \
                <hr> \
              </li> \
              <div class="loc-acc loc-acc-active jobs-wrapper" data="' + allLocations[oLocation].Id + '"> \
                <ul class="jobs" data="' + allLocations[oLocation].Id + '"></ul> \
              </div>');
          }

          jQuery('.jobopeningbtn').click(function(){
            getJobs(this);
          });
        }else{
          jQuery('#all-locations').html('<li><h2 style="text-align: center;">' + sNoLocations + '</h2></li>');
        }
      },
      complete: function(){
          jQuery('#loading').fadeOut('fast', function() {
              jQuery('#all-locations').fadeIn('slow');
          });
      }
  });
}

function getJobs(object){
    var linkObject = $(object);

    jQuery.ajax({
        url: 'https://my.peoplematter.com/api/applicationjobopening/',
        data: 'businessunitid=' + linkObject.attr('data'),
        type: 'GET',
        async: true, 
        dataType: 'jsonp',
        error: function ( jqXHR, textStatus, errorThrown ) {
            //alert('ERROR' + errorThrown);
        },
        beforeSend: function ( jqXHR ) {
          //Fade Out & Empty - Previously Opened Job Sections for a Business Location
          jQuery('.jobs[data="' + linkObject.attr('data') + '"]').html('');
          jQuery('.jobs-wrapper').removeClass('loc-acc-active').fadeOut('fast');
        },
        success: function ( oData ) {
          if(!jQuery.isEmptyObject(oData)){

              oData = sortByKey(oData, "Title", "");

              for ( var oJob in oData ) {
                //Check Peoplematter for null data to prevent errors
                if(oData[oJob].Title !== null){
                    sTitle = oData[oJob].Title;
                }else{
                    sTitle = "";
                }

                if(oData[oJob].ApplyUrl !== null){
                    sApplyUrl = oData[oJob].ApplyUrl;
                }else{
                    sApplyUrl = "";
                }
            
                //Populate window with a new list of Job Positions for a Business Location
                jQuery('.jobs[data="' + linkObject.attr('data') + '"]').append(' \
                  <li class="nav-1"> \
                     <h2> \
                         <span class="text-wrapp">' + sTitle + '</span> \
                          <span class="button-wrapp"> \
                              <a href="' + sApplyUrl + '" class="view-opening">Apply Now</a><a href="javascript:void(0);" class="view-opening more-info" data="' + oData[oJob].Id + '">More Info</a> \
                          </span> \
                      </h2> \
                      <div class="loc-acc-3 job-details" data="' + oData[oJob].Id + '"></div> \
                      <hr class="inner-loc-ruler" /> \
                  </li>');
              }

              //Create a Binding Event for the See More Info Button
              jQuery('.more-info').click(function(){
                jQuery('#desclink').click();
                var linkObject2 = $(this);

                jQuery.ajax({
                    url: 'https://my.peoplematter.at/api/applicationjobopening/',
                    data: 'businessUnitId='+linkObject.attr('data'),
                    type: 'GET',
                    async: true, 
                    dataType: 'jsonp',
                    error: function ( jqXHR, textStatus, errorThrown ) {
                        //alert('ERROR' + errorThrown);
                    },
                    success: function ( oData ) {

                        //Clear out old values
                        jQuery('.job-details').fadeOut().html('');

                        //Populate window with new Job Description, Requirements, and Additional Info
                        if ( oData != null ) {
                            for ( var item in oData ) {
                                if(linkObject2.attr('data') == oData[item].Id){

                                    //Check Peoplematter for null data to prevent errors
                                    if(oData[item].Description !== null){
                                        sDescription = oData[item].Description.trim().replace(/\n/g , "<br>");
                                    }else{
                                        sDescription = "";
                                    }

                                    if(oData[item].Requirements !== null){
                                        sRequirements = oData[item].Requirements.trim().replace(/\n/g , "<br>");
                                    }else{
                                        sRequirements = "";
                                    }

                                    if(oData[item].AdditionalInformation !== null){
                                        sAdditInfo = oData[item].AdditionalInformation.trim().replace(/\n/g , "<br>");
                                    }else{
                                        sAdditInfo = "";
                                    }

                                    //Populate window with new Job Description, Requirements, and Additional Info
                                    jQuery('.job-details[data="' + linkObject2.attr('data') + '"]').append(' \
                                        <div class="loc-desc"> \
                                            <div class="loc-desc-left"></div> \
                                            <div class="loc-desc-right"> \
                                                <ul>  \
                                                    <li><span class="first"><a data-toggle="tab" href="#desc-2" class="current-opt">Description</a></span></li> \
                                                    <li><span class="second"><a data-toggle="tab" href="#re-2">Requirements</a></span></li> \
                                                    <li><span class="third"><a data-toggle="tab" href="#mor-2">More Info</a></span></li> \
                                                </ul> \
                                            </div> \
                                            <br clear="all" /> \
                                            <div class="tab-content"> \
                                                <div class="tab-pane fade in active" id="desc-2">' + sDescription + '</div> \
                                                <div class="tab-pane fade" id="re-2">' + sRequirements + '</div> \
                                                <div class="tab-pane fade" id="mor-2">' + sAdditInfo + '</div> \
                                            </div> \
                                        </div>');
                                    
                                    //Fade In - Job Description Section
                                    jQuery('.job-details[data="' + linkObject2.attr('data') + '"]').fadeIn();
                                    
                                }
                            }
                        }
                    }
                });
              });
              
            }else{
              //Populate window with a new list of Job Positions for a Business Location
              jQuery('.jobs[data="' + linkObject.attr('data') + '"]').append('<li class="nav-1"><h2>' + sNoOpenings + '</h2><hr class="inner-loc-ruler" /></li>');
            }
        },
        complete: function(){
            //Fade In - Jobs Section for Business Location
            jQuery('.jobs-wrapper[data="' + linkObject.attr('data') + '"]').addClass('loc-acc-active').fadeIn('fast');
        }
    });
}

function sortByKey(array, sortkey1, sortkey2) {
    return array.sort(function(a, b) {
      if(sortkey1 == 'Address'){
        if(a[sortkey1].State < b[sortkey1].State) {return -1;}
        if(a[sortkey1].State > b[sortkey1].State) {return 1;}
        if(a[sortkey1].State == b[sortkey1].State && a[sortkey1].City < b[sortkey1].City) {return -1;}
        if(a[sortkey1].State == b[sortkey1].State && a[sortkey1].City > b[sortkey1].City) {return 1;}
      }else{
        if(a[sortkey1] < b[sortkey1]) {return -1;}
        if(a[sortkey1] > b[sortkey1]) {return 1;}
        if(sortkey2 != ""){
          if(a[sortkey1] == b[sortkey1] && a[sortkey2] < b[sortkey2]) {return -1;}
          if(a[sortkey1] == b[sortkey1] && a[sortkey2] > b[sortkey2]) {return 1;}
        }
      }
    });
}