import img1 from '../Images/cafe1.jpg'; 
import img2 from '../Images/pic7.jpg'; 
import img3 from '../Images/cafe2.jpg'; 
import img4 from '../Images/pic6.jpg'; 

const About = () => {
  return (
    <div class="wrapper about">
        <img className='img-box1' src={img1} alt="Kahvila" />
        <img className='img-box2' src={img2} alt="Kahvila" />
        <img className='img-box3' src={img3} alt="Kahvila" />
        <img className='img-box4' src={img4} alt="Kahvila" />
        <div className='text-box'>Ilmainen Wi-Fi ja A-oikeudet
            Kahvilassamme voit lukea päivän lehdet ja käytössäsi on 
            ilmainen Wi-Fi. Myös hyväkäytöksiset koirat ovat 
            tervetulleita - vesikupin koiralle saat kassalta. 
            Yrityksellämme on A-oikeudet. Hyvän olut-, viini- 
            ja siiderivalikoimamme parissa on mukava viettää iltaa. 
            Talviulkoilun lomassa voit nauttia eri tavoin terästettyä
            kaakaota ja muita kuumia juomia. Kesäisin suuri terassimme 
            on alueen ehdoton pistäytymispaikka.
            Pyrimme toimimaan vastuullisesti ja kestävän kehityksen 
            mukaisesti. Tarjoamme asiakkaillemme valikoituja luomu- 
            ja Reilun Kaupan-tuotteita kuten viinejä ja virvoitusjuomia.
        </div>
    </div>
  )
}

export default About
