import * as React from 'react';
import styled from 'styled-components'
import Table from '@mui/material/Table';
import Button from '@mui/material/Button';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const rows = [
    {
        image_url: 'https://res.cloudinary.com/dicisqibf/image/upload/v1653924927/cld-sample-4.jpg',
        name: 'Doan tuyet nang di',
        author: 'florentino'
    },
    {
        image_url: 'https://res.cloudinary.com/dicisqibf/image/upload/v1653924927/cld-sample-4.jpg',
        name: 'CNPM thay hung cuc chill',
        author: 'NMHUNG'
    }, {
        image_url: 'https://res.cloudinary.com/dicisqibf/image/upload/v1653924927/cld-sample-4.jpg',
        name: 'Co so du lieu thay Hoa',
        author: 'NDHoa'
    }, {
        image_url: 'https://res.cloudinary.com/dicisqibf/image/upload/v1653924927/cld-sample-4.jpg',
        name: 'LTM CPP',
        author: 'TuANh'
    },
];

export default function MusicList() {
    return (
        <Container>
            <div className="music-list">
                <h4>danh sách bài hát</h4>
                <div className="action">
                    <span>Tổng số bài hát: ...</span>
                    <Button variant="contained">ADD NEW MUSIC</Button>
                </div>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Image</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Author</TableCell>
                                <TableCell align="center">Url</TableCell>
                                <TableCell align="center">Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <img src={row.image_url} alt="" />
                                    </TableCell>
                                    <TableCell align="center">{row.name}</TableCell>
                                    <TableCell align="center">{row.author}</TableCell>
                                    <TableCell align="center">{row.image_url}</TableCell>
                                    <TableCell align="center">
                                        <button className="edit">Edit</button>
                                        <button className="delete">Delete</button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    .music-list {
        width: 80%;
        height: 100%;
        margin: 0 auto;
        padding-top: 10px;
        .action {
            margin: 10px 5px;
            display: flex;
            justify-content: space-between;
        }
        h4 {
            text-transform: capitalize;
            font-size: 40px;
            text-align: center;
            leter-spacing: 2px;
        }
        span {
            font-size: 20px;
            font-weight: bold;
            letter-spacing:1px;
            margin-bottom: 10px;
        }
        img {
            object-fit: contain;
            width: 180px;
            height: 180px;
        }
        button {
            font-size: 14px;
            padding: 5px 8px;
            margin-right: 5px;
            border: none;
            color:white;
            cursor: pointer;
            font-weight: bold;
        }
        .edit {
            background-color: green;
            &:hover {
                opacity: 0.8;
            }
        }
        .delete {
            background-color: red;
            &:hover {
                opacity: 0.8;
            }
        }
    }
`