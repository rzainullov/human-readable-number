module.exports = function toReadable (number) {
    if(number == 0) return 'zero'
    const oneToNine = {
            '1':'one', 
            '2': 'two', 
            '3': 'three',
            '4' : 'four', 
            '5':'five',
            '6': 'six',
            '7': 'seven', 
            '8' : 'eight',
            '9': 'nine', 
            }
    const dozens = { 
            '2': 'twenty', 
            '3': 'thirty',
            '4' : 'forty', 
            '5':'fifty',
            '6': 'sixty',
            '7': 'seventy', 
            '8' : 'eighty',
            '9': 'ninety'}
    const tenToNineteen = {
            '10':'ten',
            '11':'eleven',
            '12': 'twelve', 
            '13': 'thirteen',
            '14' : 'fourteen', 
            '15':'fifteen',
            '16': 'sixteen',
            '17': 'seventeen', 
            '18' : 'eighteen',
            '19': 'nineteen', 
            }
          
    let num = number;
    let hundred = '';
    let thousand = '';
    let million = '';
    num = num + '';
    if(num.length > 6 && num.length < 10){
      if(num.length == 7){
        million =  num[0];
        thousand = parseInt(num[1] + num[2] + num[3]) +'';
        hundred = parseInt(num[4] + num[5] + num[6]) + '';
      }
      if(num.length == 8){
        million = num[0] + num[1];
        thousand = parseInt(num[2] + num[3] + num[4]) + '';
        hundred = parseInt(num[5] + num[6] + num[7]) + '';
        }
       if(num.length == 9){;
        million = (num[0] + num[1] + num[2]);
        thousand = parseInt(num[3] + num[4] + num[5]) + '';
        hundred = parseInt(num[6] + num[7] + num[8]) + '';
        }
       if(thousand == '0') thousand = '';
       if(hundred == '0') hundred = '';
      }
      if(num.length > 3 && num.length < 7){
        if(num.length == 4){
          thousand = num[0];
          hundred = parseInt(num[1] + num[2] + num[3]) + '';
          }
        if(num.length == 5){
          thousand = num[0]+ num[1];
          hundred = parseInt(num[2] + num[3] + num[4]) + '';
          }
         if(num.length == 6){
          thousand = num[0] + num[1] + num[2];
          hundred = parseInt(num[3] + num[4] + num[5]) + '';
          }
         
          if(hundred == '0') hundred = '';
      }
      if(num.length > 0 && num.length < 4){
        if(num.length == 1){
          hundred = num[0];
          }
        if(num.length == 2){
          hundred = num[0] + num[1];
          }
         if(num.length == 3){
          hundred = num[0] + num[1] + num[2];
          }
        }

        if(million.length == 3 && million[1] !== '0' && million[1] !== '1' && million[2] !== '0'){
            million = oneToNine[million[0]] + ' hundred ' + dozens[million[1]] + ' ' + oneToNine[million[2]] + ' million';
          }
        if(million.length == 3 && million[1] == '0' && million[2] !== '0'){
            million = oneToNine[million[0]]  + ' hundred ' + oneToNine[million[2]] + ' million';
          }
        if(million.length == 3 && million[1] == '0' && million[2] == '0'){
            million = oneToNine[million[0]]  + ' hundred ' + 'million';
        }
        if(million.length == 3 && million[1] !== '0' && million[2] == '0'){
            million = oneToNine[million[0]]  + ' hundred ' + dozens[million[1]] + ' million';
          }
        if(million.length == 3 && million[1] == '1'){
            million = oneToNine[million[0]] + ' hundred ' + tenToNineteen[million[1] + million[2]] + ' million';
          }


        if(million.length == 2 && million[0] !== '1' && million[1] !== '0' ){
            million =  dozens[million[0]] + ' ' + oneToNine[million[1]] + ' million';
          }  
        if(million.length == 2 && million[0] !== '1' && million[1] == '0' ){
            million =  dozens[million[0]]  + ' million';
          }    
        if(million.length == 2 && million[0] == '1'){
            million = tenToNineteen[million[0] + million[1]] + ' million';
          } 


        if(million.length == 1 ){
            million = oneToNine[million[0]] + ' million';
        }


        if(thousand.length == 3 && thousand[1] !== '0' && thousand[1] !== '1' && thousand[2] !== '0'){
            thousand = oneToNine[thousand[0]] + ' hundred ' + dozens[thousand[1]] + ' ' + oneToNine[thousand[2]] + ' thousand';
          }
        if(thousand.length == 3 && thousand[1] == '0' && thousand[2] !== '0'){
            thousand = oneToNine[thousand[0]]  + ' hundred ' + oneToNine[thousand[2]] + ' thousand';
          }
        if(thousand.length == 3 && thousand[1] == '0' && thousand[2] == '0'){
            thousand = oneToNine[thousand[0]]  + ' hundred ' + 'thousand';
        }
        if(thousand.length == 3 && thousand[1] !== '0' && thousand[2] == '0'){
            thousand = oneToNine[thousand[0]]  + ' hundred ' + dozens[thousand[1]] + ' thousand';
          }
        if(thousand.length == 3 && thousand[1] == '1'){
            thousand = oneToNine[thousand[0]] + ' hundred ' + tenToNineteen[thousand[1] + thousand[2]] + ' thousand';
          }


        if(thousand.length == 2 && thousand[0] !== '1' && thousand[1] !== '0' ){
            thousand =  dozens[thousand[0]] + ' ' + oneToNine[thousand[1]] + ' thousand';
          }  
        if(thousand.length == 2 && thousand[0] !== '1' && thousand[1] == '0' ){
            thousand =  dozens[thousand[0]]  + ' thousand';
          }    
        if(thousand.length == 2 && thousand[0] == '1'){
            thousand = tenToNineteen[thousand[0] + thousand[1]] + ' thousand';
          } 


        if(thousand.length == 1 ){
            thousand = oneToNine[thousand[0]] + ' thousand';
        }



       if(hundred.length == 3 && hundred[1] !== '0' && hundred[1] !== '1' && hundred[2] !== '0'){
            hundred = oneToNine[hundred[0]] + ' hundred ' + dozens[hundred[1]] + ' ' + oneToNine[hundred[2]]; 
          }
        if(hundred.length == 3 && hundred[1] !== '0' && hundred[1] == '1' && hundred[2] == '0'){
            hundred = oneToNine[hundred[0]] + ' hundred ' + tenToNineteen[hundred[1] + hundred[2]]; 
          }  
        if(hundred.length == 3 && hundred[1] == '0' && hundred[2] !== '0'){
            hundred = oneToNine[hundred[0]]  + ' hundred ' + oneToNine[hundred[2]] ;
          }
        if(hundred.length == 3 && hundred[1] !== '0' && hundred[2] == '0'){
            hundred = oneToNine[hundred[0]]  + ' hundred ' + dozens[hundred[1]] ;
          }  
        if(hundred.length == 3 && hundred[1] == '0' && hundred[2] == '0'){
            hundred = oneToNine[hundred[0]]  + ' hundred';
        }
        if(hundred.length == 3 && hundred[1] == '1'){
            hundred = oneToNine[hundred[0]] + ' hundred ' + tenToNineteen[hundred[1] + hundred[2]];
          }


        if(hundred.length == 2 && hundred[0] !== '1' && hundred[1] !== '0' ){
            hundred =  dozens[hundred[0]] + ' ' + oneToNine[hundred[1]]; 
          }  
        if(hundred.length == 2 && hundred[0] !== '1' && hundred[1] == '0' ){
            hundred =  dozens[hundred[0]];  
          }    
        if(hundred.length == 2 && hundred[0] == '1'){
            hundred = tenToNineteen[hundred[0] + hundred[1]];
          } 


        if(hundred.length == 1 ){
            hundred = oneToNine[hundred[0]];
        }


        if(million !== '' && thousand !== '' && hundred !== '' ) return (million +' '+ thousand +' '+ hundred);
        if(million !== '' && thousand == '' && hundred == '') return (million);
        if(million !== '' && thousand == '' && hundred !== '' ) return(million +' '+ hundred);
        if(million !== '' && thousand !== '' && hundred == '' ) return(million +' '+ thousand);

        
        if(million == '' && thousand !== '' && hundred !== '') return(thousand +' '+ hundred);
        if(million == '' && thousand !== '' && hundred == '') return(thousand);
        if(million == '' && thousand == '' && hundred !== '') return(hundred);
}
