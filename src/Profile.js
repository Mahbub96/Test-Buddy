import React from 'react';
import Card from './components/Card';
import Details from './components/Details';
import Navbar from './components/Navbar';
import classes from './Styles/Home.module.css';

let ImgLink = 
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABmJLR0QA/wD/AP+gvaeTAAAFfElEQVRoge2aW2xURRjHf7sBg0CrlbTRVlQMSouVKNWEiIl4iZcQo74oEjREo8XLCz5ATZpIghpM8BKFAmrURGKiD6aERNEHKpGiSL0kJVGjSAVbDBFB0qrltj5838k5e3bPOTNn9+xu1/6TyezOznzz/c/sme8yA9m4AvgU+BvIVHAZAl4FaikAc4F/KoCMTdkFTIhLeI8KeQuYFldICZACrgH2Ifo+EUfINB08ApxVNNWSxQOIzltsBqW1rtH6MHCiiEoliYNaW73H6egu1YX/HeHYO1yJUQMsBu4DZgE/aomNS5ANYL/FmHOA6wuZ1ABXAxuB4wSbpp+0nxVsCTcA/Tpmvu1kEZgMPATsxiV1BvgMuB9oAhYBPdru9Nmt4yabTBJFuAWYqp+9ZPuRlS4GWoHXgGO4JI4ALwPNAWOagZe0nzPmmMppDZssjHAL8iT7EdfTS7bBglA+pJDV2kn237QXeBCYZChnEmKX/XJ2qvyUd0IQwvuBAWCGT9hU4AvkiZ1Bdva9wM2I3fYiDTwCnBug2EHgPc/3LuAx/fwXsBnYhDzMuGgF2pEH4Pz7uvB5ZFF/af/fOGhl5xLt/9Zp31rgFPAv8pCmWNGKxhSVO6rz1IK5WToM3AgsQVbhj4B+3yFP8qKA3/uBo4ZzJoo4ZqkY6CJ3szmvQJn5Nr/1/k7lIuxsWr24yq2MISdo0+rFt2k5KBdhL15QHZ7xtU8Azg8YM4v8ZmkdcGXYZJVAeJXqsMrXvhGxDj3IajWS3/H4CniYiM3P1pe+UCfs08lKgS8RP3qBFi+GETO3CfjGRmjUCtchu7PzNNtthBsiaIVBgod2YDswqPUy3DjeGmGEU8A2/X1YJwt122IijLANbgF+RRyjHJjEw7cCtwGHgNnATYinlQbaDGWUEvMRPyBvJGeirBN6vQ8c8LQ/jrzLj3rapgN/Eu1tDQBn++bJGOhighwT5IUJYcczmulrv0Nr7+Z1CslpR2GEXIJDWt8O1BvIyId6j16DYR3D3uFG3MT8OuBOxHPJaPsFMZXzo06VdLKn64F5RC9KGrgOMV+Onr/h+ux5EbVLLyE3SX8S8W6KiUuBbuC0Z55DwFbgeWA58gotB57T9t89fU/reH/ElwMTx2M2sAE5itlAjLSKBZqBF4FfMDuB2AesRTyvUJjEw+XGZcBVSCKiDknhjCCb4w9IhPazrdBKcC1LgkqzoYljnHAE5gAfISagrfjqWKMBmBhnoOk7vIxss7QozmRFwuWqwztxBpsSTgM3ICkUJ9guluNhiwWqQ4/NIJN4eA6wGuhEknA7tMwAFiKe1+vatwY5UPemafuApz3fn8J1/0zxNdBhOSYUYSu8Un9b62t/hdwcVAvZXlIG9xzXwS7MnAlvyecXJ7bC32q9GLlIcgC4GDnJg+xMw/dIrNzkafMn1RciXprNhrnXoq8RohIAn+M69X240c4OIsKxBBFrhU2ecgZ5T99FYtg2rT8E7qF4cWxJYbpLNyIhW2PiGkUjsXfYiyHcQH1MYty1rHaME652mGxaKeTMxrl/eQT4hFwPakzAITyqdRNwF9n3F5uBN3zjhpEEXrevPerKQxS6ce9f1QNLkVOPQq5ABGINYtdGEdIOUsi5zhotH2i/o+SmQk2uPISVzR5ZHdrmf6gOCrbDHUpuhZK6F1npDHI658V25ArEPOBjT3vUlYcwnES8OQdvqj5bY8iywrMIyRPA3QF93tY+S5NWJgRF86U7kST3RGSlg0iPSQSZpaolHWaHq5J0lONRdaRNPK2qIm0aHnYihFcgB+MDiWlkjulaH09yEuculVPKYZbSwLW4J4tPJj2hn3Q5yx7MrxgXhNXI9YZyER1E0sTW15b+A7++Qrxf65BNAAAAAElFTkSuQmCC";



function Profile() {
    return (
        <div className={classes.container}>
            <section className={classes.top}>
                <Navbar />
            </section>
            <section className={classes.bottom}>

                <Details />
                <div class="bottom-cards">
                    <div class="card-wrapper">
                        <Card ImgSrc={ImgLink}>
                            This is peregraph
                        </Card>
                        <Card ImgSrc={ImgLink}>
                            This is peregraph
                        </Card>
                        <Card ImgSrc={ImgLink}>
                            This is peregraph
                        </Card>
                        <Card ImgSrc={ImgLink}>
                            This is peregraph
                        </Card>
                        <Card ImgSrc={ImgLink}>
                            This is peregraph
                        </Card>
                        <Card ImgSrc={ImgLink}>
                            This is peregraph
                        </Card>
                        <Card ImgSrc={ImgLink}>
                            This is peregraph
                        </Card>
                        <Card ImgSrc={ImgLink}>
                            This is peregraph
                        </Card>
                        <Card ImgSrc={ImgLink}>
                            This is peregraph
                        </Card>
                        <Card ImgSrc={ImgLink}>
                            This is peregraph
                        </Card>
                        
                    </div>
                </div>
            </section>

          
        </div>
    )
}

export default Profile
