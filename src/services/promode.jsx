import { Html5Qrcode } from 'html5-qrcode';
const createInstance = () => { 
    return new Html5Qrcode("reader");

 }
 module.exports = createInstance;