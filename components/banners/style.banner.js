import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    bannerSection: {
        maxWidth: '1300px',
        '& img': {
            borderRadisus: '12px',
            maxWidth: '100%',
            height: 'auto'


        }
    }
}))