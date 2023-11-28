import Link from 'next/link';

const AboutUs = () => {
  return (
    <div className="p-16 bg-gradient-to-b from-gray-300/50  via-white to-gray-300  shadow-lg mx-16 mt-8 font-">
      
    <h3 className="text-gray-700 font-bold text-3xl mb-4 text-center mx-16">
      Why <Link href='/'>Visonix</Link>  ?
      
    </h3>
    <h3 className="text-gray-600 font-bold text-2xl mb-4 text-center">We develop websites with client privacy at the forefront.</h3>
    <p className="text-gray-700 leading-relaxed text-center">We adhere to strict data protection protocols and employ industry-best practices to safeguard your information. We never share or sell client data with third parties without explicit consent, and we ensure that access to your data is restricted to authorized personnel.</p>
     
     <h3 className="text-gray-600 font-bold text-2xl mb-4 text-center mt-8">Your Projects Remain Yours</h3>
    <p className="text-gray-700 leading-relaxed text-center">We respect the ownership and originality of our clients creations. We do not display client projects on our website without their express permission. Your projects are your pride, and we honor your right to control their showcase.</p>
     
  </div>
  );
};

export default AboutUs;
