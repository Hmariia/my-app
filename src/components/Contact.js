import img5 from '../Images/mail.jpg'; 
import img6 from '../Images/phone.jpg'; 

const Contact = () => {
  return (
    <div className="wrapper contact">
        <div class="box1">
            <h2>Sloth Cafe</h2>
        </div>
        <div className='box2'>
            <h3>Y-tunnus: 0988878-1</h3>
            <h3>
                <br />Slothstreet 28 <br /> 09875, Helsinki
            </h3>
            <br />
            <img src={img6} alt="picture" />
            <a href="#">+358 89895627</a>
            <br />
            <img src={img6} alt="picture" />
            <a href="#">cafe@sloth.com</a>
            <br /><button>OPEN HOURS</button>
        </div>
        <div class="box3">
            <h2>Contact form...</h2>
            <form class="my-form">
                <div class="form-group">
                    <input type="text" name="name" placeholder="NAME" />
                </div>
                <div class="form-group">
                    <input type="text" name="email" placeholder="EMAIL" />
                </div>
                <div class="form-group">
                    <input type="text" name="phone" placeholder="PHONE NUMBER" />
                </div>
                <div class="form-group">
                    <textarea name="message" placeholder="MESSAGE"></textarea >
                </div>
                <div class="sloth-button">
                    <br /><button>SUBMIT</button>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Contact