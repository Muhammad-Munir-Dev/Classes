import '../App.css';
import Box from '@mui/material/Box';
import CardCom from '../components/card';
import Card from '@mui/material/Card';

function Report() {
  return (
    <div className="Report">
      <Box className="dashboard-card">
        <CardCom title="Users" url="https://picsum.photos/200"/>
        <CardCom title="Orders" url="https://picsum.photos/200/300"/>
        <CardCom title="Shipments" url="https://picsum.photos/200/300/?blur"/>
      </Box>
    </div>
  );
}

export default Report;