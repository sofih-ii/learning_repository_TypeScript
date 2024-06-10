import _ from 'lodash';
const data = [
    {
        username: 'sofi',
        role: 'admin'
    },
    {
        username: 'sara',
        role: 'seller'
    },
    {
        username: 'david',
        role: 'customer'
    }
]
const rta=_.groupBy(data, (item)=> item.role);
console.log(rta);