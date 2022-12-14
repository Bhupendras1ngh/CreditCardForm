import {FormControl} from '@angular/forms';
export class DateFormControl extends FormControl {
    setValues(value :string  ,options :any){
       console.log(value);
       if( value.length === 2){
        super.setValue(value  + '/',{...options , emitModelToViewChange :true});
        return;
       }
       super.setValue(value ,{...options , emitModelToViewChange :true});
    }
}
