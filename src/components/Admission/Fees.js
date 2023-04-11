import React from 'react'

const Fees = () => {
    document.title="A.I.J ITI - Admission Fees";
    return (
        <div className='container h2-ubuntu'>
            <h1 className='text-center mt-4'>Admission Fees</h1>
            <table className='table table-bordered table-striped text-center mt-4 mb-4'>
                <tbody className='table-primary'>
                    <tr className='table-dark'>
                        <th>Sr No.</th>
                        <th>Courses</th>
                        <th>Fees</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Academic Fees Per Year</td>
                        <td>25,000</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Offline Form Fees (Compulsary To Fill And Submit In Institute)</td>
                        <td>200</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Online Form Fees </td>
                        <td>300</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><b>Total</b></td>
                        <td><b>25,500</b></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Fees
