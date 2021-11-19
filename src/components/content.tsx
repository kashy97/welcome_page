import React from 'react';
import
{
    Button, 
    Container,
    Row,
    Col,
}
from 'reactstrap';
import ReactPlayer from "react-player";


const Content =() => {
    return (
        <section  className="content">
            <div>
                <Button
                    active
                    color="primary"
                    outline
                    size="lg"
                    border-radius="10px"
                >
                    Program guidelines
                </Button>
            </div>
            <Container>
                <Row>
                    <Col className="bg-light border" xs="6" fluid="md">
                        <ReactPlayer 
                        url= 'videos/ANTHEM_SONG_SSA.WEBM'
                        width='100%'
                        height='100%'
                        controls = {true}
                        />
                    </Col>
                    <Col className="bg-light border" xs="6" fluid="md">
                        <h1>வணக்கம்!</h1>
                        <ul className="points">
                            <li>இல்லம் தேடிக் கல்வி ஒரு தன்னார்வ தொண்டு. கொரோனா பெருந்தொற்றுப் பரவல் சார்ந்த பொது முடக்க காலங்களில் அரசு பள்ளிகளில் ஒன்று முதல் எட்டாம் வகுப்பு வரை பயிலும் மாணவர்களின் கற்றல் இடைவெளி மற்றும் இழப்புகளை சரி செய்ய இல்லம் தேடிக் கல்வித் திட்டம் செயல்படுத்தப்பட உள்ளது. பள்ளி முடிந்த பின்பு மாலை நேரங்களில் 'இல்லம் தேடிக் கல்வி' மையங்களில் கற்பித்தல் சேவையை மேற்கொள்ள உள்ள தன்னார்வலர்கள் பதிவு செய்ய ஏதுவாக, படிவம் இவ்விணைய தளத்தில் வழங்கப்பட்டு உள்ளது.</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col className="bg-light border" fluid="md">
                        <h1>தன்னார்வலர்கள்..</h1>   
                        <ul>
                            <li>வாரத்திற்கு குறைந்தது ஆறு மணி நேரம் குழந்தைகளுடன் செலவிட தயாராக இருக்க வேண்டும் (அல்லது) பகுதி நேரமாகவும் தன்னார்வலராக இருக்கலாம்.</li>
                            <li>கண்டிப்பாக குழந்தைகளுடன் உரையாட தமிழ் தெரிந்திருக்க வேண்டும்</li>
                            <li>தமிழ், ஆங்கிலம், மற்றும் கணிதம் கற்றுத்தர வேண்டும். (பயிற்சிகளும் உபகரணங்களும் வழங்கப்படும்)</li>
                            <li>யார் நிர்பந்தமும் இன்றி தன்முனைப்பாக பங்கேற்க வேண்டும்</li>
                            <li>குறைந்தபட்சம் 17 வயது நிரம்பி இருத்தல் அவசியம்</li>
                        </ul> 
                    </Col>
                </Row>
            </Container>
            <div>
                <Button
                    active
                    color="primary"
                    outline
                    size="lg"
                    border-radius="10px"
                >
                    தன்னார்வலர்களுக்கான பதிவேற்று படிவத்தை தொடங்கு / Click here to start the Volunteer Registration Form 
                </Button>
            </div>
        </section>
    );
}

export default Content;