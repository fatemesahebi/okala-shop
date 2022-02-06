import * as React from 'react';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// برندهای موجود
const label = ['خشک پاک', 'گلها', 'نوبر سبز', 'فله', 'ملارد','راوک','پمینا','بلوط','ارمغان پارس','برتر',' یک و یک','دکتر بیژن','سرد وتازه',' رضوانی','نصر خاتم','فارسی']

const BrandFilter = () => {

    return (
        <FormGroup>
            {label.map(item => <FormControlLabel control={<Checkbox/>} label={item}/>)}

        </FormGroup>
    );

};

export default BrandFilter;
