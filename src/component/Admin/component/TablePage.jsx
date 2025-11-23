import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';

function TablePage(props) {
    const { user } = props;
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = getListUsers();
    //         setUser(res.data);
    //         console.log(res.data);
    //     }
    //     fetchData();
    // }, []);

    return (
        <>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    {user && user.length > 0 &&
                        user.map((item, index) => {
                            return (
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.email}</td>
                                    <td>{item.password}</td>
                                </tr>
                            );
                        }
                        )
                    }
                </tbody>
            </table>
        </>
    );
}

export default TablePage;