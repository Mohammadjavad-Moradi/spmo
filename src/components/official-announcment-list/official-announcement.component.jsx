import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectList, selectTitle } from '../../redux/announcements/announcements.selector';

import { PageContainer, FullListWrapper, Wrapper, ItemContainer, ListItem, PageIndicator, SelectContainer, FormControlContainer } from './official-announcement.styles';
import TitleContainer from '../title-container/title-container.component';

import Divider from '@material-ui/core/Divider';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import { firestore } from '../../firebase/firebase.utils';

const OfficialAnnouncement = ({annuoncementList, title, history, match}) => {
    const [ list ] = React.useState(annuoncementList);
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    
    const pageCount = Math.ceil(list.length / pageSize);

    React.useEffect(() => {
        //let unSubscribeFromSnapshot = null
        
        const fetchData = async () => {
            const collectionRef = firestore.collection('/news/Y3tLkwHtnxD3Av6WxWnk/official');
            
            const ordered = collectionRef.orderBy('id', "desc").limit(3);
            
            ordered.onSnapshot(async snapshot => {

                snapshot.docs.map(doc => {
                    return console.log(doc.data())
                })
            });
        } 
        fetchData();

        // return function cleanUp() {
        //     unSubscribeFromSnapshot();
        // }    
    },[])


    const handleClick = (id) => {
        history.push(`${match.url}/${id}`)
    }

    const handleChange = (event, value) => {
        setPage(value);
    }

    const handlePageSize = (event) => {
        setPageSize(event.target.value);
      };

    const pagination = (myArray, pageNumber, pageSize) => {
        return myArray.slice((pageNumber -1 ) * pageSize, pageNumber * pageSize );
    }

    return (
        <PageContainer>
            <TitleContainer name={title} color='blue' />
            <Wrapper>
                <FullListWrapper>
                    {
                        pagination(list, page, pageSize).map((item, index) => (
                            <React.Fragment key={index}>
                                <ItemContainer >
                                    <ListItem onClick={() => handleClick(item.id) } title={'true'} >{item.title}</ListItem>
                                    <ListItem onClick={() => handleClick(item.id) } >{item.date}</ListItem>
                                </ItemContainer>
                                <Divider variant="middle"/>
                            </React.Fragment>
                        ))
                    }
                </FullListWrapper>
                    <PageIndicator page={page} count={pageCount} onChange={handleChange}/>
                    
                    <FormControlContainer>
                        <FormControl variant='outlined'>
                            <InputLabel id="demo-simple-select-label">Page Size</InputLabel>
                            <SelectContainer
                            labelId="demo-simple-select-outlined-label"
                            id="page-size"
                            value={pageSize}
                            onChange={handlePageSize}
                            label="Page Size"
                            >
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={20}>20</MenuItem>
                                <MenuItem value={30}>30</MenuItem>
                            </SelectContainer>
                        </FormControl>
                    </FormControlContainer>
                
            </Wrapper>
        </PageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    annuoncementList: selectList(ownProps.match.params.category)(state),
    title: selectTitle(ownProps.match.params.category)(state)
})

export default withRouter(connect(mapStateToProps)(OfficialAnnouncement));