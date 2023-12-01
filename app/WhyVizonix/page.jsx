
const AboutUs = () => {
  return (
    <div className="p-16 drop-shadow-lg mx-8 mt-8 rounded-3xl text-center "style={{
      backgroundImage: `url('https://img.freepik.com/free-photo/artistic-blurry-colorful-wallpaper-background_58702-8211.jpg?w=1060&t=st=1701414164~exp=1701414764~hmac=0c2568c75879b376770a31b236e0e737a5b25db7c5305168bcdb46abc3776d6d')`,
      backgroundSize: 'cover',
      backgroundPosition: 'fixed',
      backgroundRepeat: 'no-repeat',
      height: 'auto',
    }} >
      
    <h3 className="text-gray-700 drop-shadow-2xl font-bold text-3xl mb-4 sm:text-center md:text-center lg:text-center">Why Visonix ?</h3>
    <h3 className="text-gray-600 drop-shadow-2xl font-bold text-2xl mb-4 text-center">We develop websites with client privacy at the forefront.</h3>
    <p className="text-gray-700 drop-shadow-2xl leading-relaxed text-center">We adhere to strict data protection protocols and employ industry-best practices to safeguard your information. We never share or sell client data with third parties without explicit consent, and we ensure that access to your data is restricted to authorized personnel.</p>
     
     <h3 className="text-gray-600 drop-shadow-2xl font-bold text-2xl mb-4 text-center mt-8">Your Projects Remain Yours</h3>
    <p className="text-gray-700 drop-shadow-2xl leading-relaxed text-center">We respect the ownership and originality of our clients creations. We do not display client projects on our website without their express permission. Your projects are your pride, and we honor your right to control their showcase.</p>
     
  </div>
  );
};

export default AboutUs;
