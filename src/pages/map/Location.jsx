import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import './Location.css';
import { TextField } from '@mui/material';
import { LocationOn, Search } from '@mui/icons-material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Location = () => {

    const locationData = [
        {name: 'Hội sở chính Agribank', address: 'Láng Hạ', phone: '02438313717'},
        {name: 'ATM Hội sở chính', address: 'Láng Hạ', phone: '02438313717'}
    ];

    const {isLoaded} = useLoadScript({
        // googleMapsApiKey: 'AIzaSyALgG7zKSfp4LfI_UzDZY-u-qpreKgkN1A',
        googleMapsApiKey: 'AIzaSyCGsi5STsQ8aAcC_VhNqxbo_s4223TZOaA',
    });  

    const center = useMemo(() => ({ lat: 21, lng: 105.83 }), []);
    
    if(!isLoaded) return <div>Loading...</div>;

    return  <div className='location'>

        <div className="searchDiv">
            <div className='row row1'>
                <TextField label='Nhập địa chỉ cần tìm' fullWidth />
                <button className='searchBtn'>
                    <Search />
                </button>
            </div>
            <div className='row row2'>
                <Box sx={{ minWidth: 210 }}>
                    <FormControl fullWidth>
                        <InputLabel>Tỉnh/Thành phố</InputLabel>
                        <Select label='Tỉnh/Thành phố'>
                            <MenuItem value={'Hà Nội'}>Hà Nôi</MenuItem>
                            <MenuItem value={'Thái Bình'}>Thái Bình</MenuItem>
                            <MenuItem value={'Hải Phòng'}>Hải Phòng</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box sx={{ minWidth: 210 }}>
                    <FormControl fullWidth>
                        <InputLabel>Quận/Huyện</InputLabel>
                        <Select label='Quận/Huyện'>
                            <MenuItem value={'Hoàng Mai'}>Hoàng Mai</MenuItem>
                            <MenuItem value={'Thanh Xuân'}>Thanh Xuân</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
            </div>
            <div className="row row3">
                <input type="checkbox" value="ATM" />
                <label for="vehicle1"> ATM</label>
                <input type="checkbox" value="Chi nhánh" />
                <label for="vehicle2"> Chi nhánh</label>
            </div>

            <div className='scrollDiv'>
                {
                    locationData.map(l => {
                        return <div className='locationItem'>
                            <h2>
                                <LocationOn /> {l.name}
                            </h2>
                            <div className='address'>Địa chỉ: {l.address}</div>
                            <div className='phone'>Điện thoại: {l.phone}</div>
                        </div>
                    })
                }
            </div>
        </div>

        <GoogleMap zoom={10} center={center} mapContainerClassName='map-container'>
            <Marker position={center} />
        </GoogleMap>
    </div>
}

export default Location;