class StringSplosion {
   
    constructor(_string) {
        this.stringArg = _string;
    }
    manipulate()
    {
    	let count = 1;
    	let count1 = 0;
    	let mword ='';
    	let mword1 = ''
        for(count; count<=this.stringArg.length ;count++){
          
          mword = this.stringArg.slice(0, count);
          mword1 += mword;
        }
        return mword1;
        
    }
}
module.exports = StringSplosion;