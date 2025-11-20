import Alert from 'react-bootstrap/Alert';

function Welcome() {
  return (
    <>
      
        <Alert variant='dark' className='text-center'>
         <Alert.Heading className='fs-3' style={{color: "#32A852"}}>EpiLibrary</Alert.Heading>
      <p className='fs-5'>
       <span style={{color: "#32A852"}}>EpiLibrary</span> : Dove l'<span style={{color: "#6D1566"}}>epico</span> terrore ti attende.
      </p>
        </Alert>
     
    </>
  );
}

export default Welcome;