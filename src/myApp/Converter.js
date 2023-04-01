import React, {useState} from 'react';

function Convert() {
    const [form, setForm] = useState('');

    const handler = (event) => {
        if(event.target.value.length > 6) {
            const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(event.target.value);
            if(result !== null) {
                setForm(`rgb(
                    ${parseInt(result[1], 16)},
                    ${parseInt(result[2], 16)},
                    ${parseInt(result[3], 16)}
                )`);
            } else {
                setForm('error');
            };
        } else {
            setForm('wait for it...')
        };
    }
    if(form === 'error') {
        document.body.style = `background: red`;
    } else {
        document.body.style = `background: ${form}`;
    };

    return <form>
        <input type='text' onChange={handler}/>
        <div>{form}</div>
    </form>
}

export default Convert;
