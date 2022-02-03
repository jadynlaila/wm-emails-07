const url = '/api/v1/products';
const fileFormDOM = document.querySelector(".file-form");

const nameInput = document.querySelector('#name');
const priceInput = document.querySelector('#price');
const imageInput = document.querySelector("#image");

const container = document.querySelector('.container');
const reset = document.querySelector('#reset')
let imageValue;


imageInput.addEventListener('change', async (e) => {
    const imageFile = e.target.files[0];
    console.log(imageFile);
    const formData = new FormData();
    formData.append("image", imageFile)
    console.log([...formData.values()]);

    try{
        const {
            data: {
                image: {
                    src
                }
            }
        } = await axios.post(`${url}/uploads`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        imageValue = src
    }
    catch(err){
        imageValue = null;
        console.log(err);
    }

})


reset.addEventListener('click', async () => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'felton.maggio77@ethereal.email',
            pass: process.env.MAILERPASS
        }
    });
    
    let info = await transporter.sendMail({
        to: 'jadyncalh@gmail.com',
        //could be used with an array of emails
        from: 'ceoofgoogle@mcdonalds.gov',
        replyTo: 'AAAHHHH@sorryforscreaming.email',
        subject: 'nodemailer test',
        html: '<h1>HI</h1><p>testing<em> nodemailer </em></p>'
    })
    console.log(sent);
    res.json(info)
})




