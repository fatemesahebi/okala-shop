import { styled } from '@mui/system';

export const Topsection = styled('div')({
    color: 'black',
    backgroundColor: 'rgb(255, 255, 255)',
    top: '0px',
    left:' 0px',
    right: '0px',
    height:' 48px',
    display: 'flex',
    padding: '0px 20px',
    position: 'relative',
    zIndex:' 101',
    direction: 'rtl',
    background: 'rgb(255, 255, 255)',
    boxShadow: 'rgb(22 22 22 / 4%) 0px 2px 4px -1px , rgb(22 22 22 / 4%) 0px 4px 8px -1px',
    transition: 'top 0.7s ease-in-out 0s',
    alignItems: 'center',
    justifyContent: 'space-between',
});
export const Slidercontainer = styled('div')({
    width: '100%',
    height: '232px',
    background: 'teal',
    paddingBottom: '24px',
    borderBottom: '1px solid rgba(240, 240, 240, 1)',
});

export const Infosection = styled('div')({
    padding: ' 12px 16px 24px',
    direction:'rtl'
});
export const Topwrapper = styled('div')({
    display:' flex',
    position: 'relative',
    minHeight: '30px',
    alignItems: 'center',
    paddingLeft: '94px',
    marginBottom: '40px'
});
export const Usersrate = styled('div')({
    background:' #FFBC02',
    top:' 0',
    left: '0',
    width: '62px',
    height: '30px',
    display: 'flex',
    position: 'absolute',
    alignItems: 'center',
    borderRadius: '8px',
    justifyContent: 'center',
    color:'white',
});

export const Bottomwrapper = styled('div')({
    height: '36px',
    display:' flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});
export const Brandwrapper = styled('div')({
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
});
export const Pricewrapper = styled('div')({
    display: 'flex',
    position: 'relative',
    direction: 'ltr',
    alignItems: 'center',
});

export const Showcomments = styled('div')({

    height: '56px',
    display: 'flex',
    padding: '0 18px',
    fontSize:' 0.75rem',
    alignItems: 'center',
    fontWeight: '400',
    justifyContent:'space-between',
});

export const Addtocart = styled('div')({

    left: '0',
    right: '0',
    bottom: '0',
    height: '56px',
    display: 'flex',
    padding: '9px 16px',
    zIndex: '10',
    position: 'fixed',
    background: '#fff',
    boxShadow: '0 -1px 10px #dfdfdf',
    justifyContent: 'space-between',
    boxSizing:'border-box'
});

export const AccordionSection  = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#F8F8F8',
    borderBottom: '1px solid rgba(240, 240, 240, 1)',
});

export const Container = styled('div')({
    width:'100%'
});

export const Wrap  = styled('div')({
    background: '#F8F8F8',
    color: 'black',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:'100%',
    textAlign: 'center',
    cursor: 'pointer',
    paddingRight: '1rem',
    paddingLeft: '1rem',
    boxSizing:'border-box',
});

export const Dropdown   = styled('div')({
    background: '#F8F8F8',
    color: '#black',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});


export const Buttonwrapper = styled('div')({
    top: '1rem',
    left: '1rem',
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    boxSizing:'inherit'
});

export const Buttoncontainer = styled('div')({
    width: '40px',
    cursor: 'pointer',
    display: 'flex',
    padding: '5px 0',
    position: 'relative',
    alignItems: 'center',
    borderRadius: '8px',
    margiBottom: '8px',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(248, 248, 248, 1)',
})
