import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import "leaflet/dist/leaflet.css"
import SectionTitle from '../../Shared/SectionTitle';
import MyDiv from '../../../components/MyDiv';
const ServiceCoverage = ({serviceCenters}) => {
    const position = [23.68, 90.35]
    return (
        <MyDiv>
            <SectionTitle className={'mb-8'} title={'Service Coverage'}/>
            {/* map  */}
            <MyDiv>
                
                <div className='min-h-96 '>
                    <MapContainer  className='w-full h-[550px]' center={position} zoom={7} scrollWheelZoom={false} >
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        {
                            serviceCenters.map((center,i) => <Marker key={i} position={[center.latitude, center.longitude]}>
                                <Popup>
                                    <strong>{center.district}</strong> <br /> {center.covered_area.join(', ')}

                                </Popup>
                            </Marker>)
                        }
                    </MapContainer>
                </div>
            </MyDiv>
        </MyDiv>
    );
};

export default ServiceCoverage;