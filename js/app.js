/*
  @TODO : Add Script

  Details;
  1. Formula for calculating IDW by
      - Male:	 50.0 kg + 2.3 kg per inch per inch over 5 feet : B. J. Devine Formula (1974)
      - Female:	49 kg + 1.7 kg per inch over 5 feet : J. D. Robinson Formula (1983)
  2. BMI Formula : kg/(height in metres * height in metres)
  3. jQuery for modifying bound name result(color change)
  4. Enable tooltips

*/

var app = new Vue({
    el: '#app', //bind elements and data
    data: {
      my_name: '',
      my_age: '',
      my_gender: '',
      height: '',
      my_results: '',
      range: '',
    },
    methods: {
      //function to calculate weight
      calculate_weight: function(){

        //set additional weight to 0, to be incremented based oh height
        var additional_weight = 0;

        //male weight calculation here
        if (this.my_gender == 'male'){
          //set ideal weight to a constant of 50
          var ideal_weight = 50;

          //calculate additional Weight
          this.my_height = this.my_height/30.48;  //convert to feet

          if (this.my_height > 5){
            var extra_height = this.height - 5;
            extra_height = extra_height * 12; // convert to inch
            additional_weight = 2.3 * extra_height;
            }
          }

          //female weight calculation here
          if (this.my_gender == 'female'){
            //set ideal weight to a constant of 50
            var ideal_weight = 49;

            //calculate additional Weight
            this.my_height = this.my_height/30.48;  //convert to feet
            if (this.height > 5){
              var extra_height = this.height - 5;
              extra_height = extra_height * 12; // convert to inch
              additional_weight = 1.7 * extra_height;
              }

            //other weight calculation here
            if (this.my_gender == 'other'){
                //set ideal weight to a constant of 50
                var ideal_weight = 54;

                //calculate additional Weight
                this.my_height = this.my_height/33.52;  //convert to feet
                if (this.my_height > 5){
                  var extra_height = this.my_height - 5;
                  extra_height = extra_height * 12; // convert to inch
                  additional_weight = 1.7 * extra_height;
                  }
            }

        //calculate total weight
        total = ideal_weight + additional_weight;

        //print out/diplay the calculated weight
        var results_span = document.getElementById('result');
        results_span.innerHTML = "Ideal Weight: " + Math.trunc(total) + "kg";

        //create limits for weight Range
        var weight_range_lower = Math.trunc(total - 15);
        var weight_range_upper = Math.trunc(total + 6);

        //Didplay weight Range
        var results_span = document.getElementById('range');
        results_span.innerHTML = "Range: " + weight_range_lower + " kg - " + weight_range_upper +  " kg";

        //display name of the user
        print_name.innerHTML = this.name + "'s Results";

      }

      //function to clear form
      resetForm: function() {
            this.my_name = '';
            this.my_age = '';
            this.my_gender = '';
            this.my_height = '';
        }

    }//end of method

  })
