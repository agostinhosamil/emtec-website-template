import { FooterContactForm } from '@components/Footer/ContactForm'

import { ContactFormTitle, ContactFormWrapper } from '@styles'

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

export default function Contact () {
  return (
  	<div className="container">
  		<ContactFormWrapper className="wrapper row">
  			<div className="col-6 col-12-mobile">
  				<ContactFormTitle>
  					Entre Em Contacto
  					<span>Envie-nos uma mensagem ou peça gratuitamente seu orçamento.</span>
  				</ContactFormTitle>
  				<FooterContactForm askBudget={ true } />	
  			</div>
  			<div className="col-6 col-12-mobile">
  				<Map
  				  googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + process.env.GOOGLE_API_SECRET}
  				  loadingElement={<div style={{ height: `100%` }} />}
  				  containerElement={<div style={{ height: `400px` }} />}
  				  mapElement={<div style={{ height: `100%` }} />}
  				/>
  			</div>
  		</ContactFormWrapper>
  	</div>
  )
}


const Map = withScriptjs(withGoogleMap(() => {
	return (
		<GoogleMap
	    defaultZoom={8}
	    defaultCenter={{ lat: -34.397, lng: 150.644 }}
	  >
	    <Marker position={{ lat: -34.397, lng: 150.644 }} />
	  </GoogleMap>
	)
}))

