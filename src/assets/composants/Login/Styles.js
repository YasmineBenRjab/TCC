import image from '../Images/Login.jpg'
const styles = {
  login:{
    width: '100%',
    height: '700px',
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'top center',
  },
carte:{
    alignItems:'center',
    paddingTop:'15%',
    paddingLeft:'65%'
},
  form: {
    backgroundColor: '#DCDCDC',
    borderRadius: '20px',
   
    textAlign: 'center',
    height: '410px',
    width: '410px',
  },
  link: {
    marginLeft: '40px'
  },
  LoginTitle:
  {color:'#2D2876' ,
  fontWeight: 'bold' ,
  paddingBottom:20
},
LoginEmail:
{paddingBottom:20},
LoginFrom:
{ width: '26ch' },
LoginConx:
{ '& button': { mt:4,ml:3} },
LoginButton:
{ backgroundColor:'#2D2876' ,borderRadius:10 },
LoginLink:
{ mt:"10px" , ml:"10px"},
LoginNavLink:
{color:'#2D2876',fontWeight: 'bold'}, 
};
export default styles;
