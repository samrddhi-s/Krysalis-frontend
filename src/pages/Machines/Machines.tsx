import React from 'react';
import MachineCard from '../../component/MachineCard/MachineCard';
import { useNavigate } from 'react-router-dom';


const Machines = () => {
    const navigate=useNavigate()
    const machines = [
        {
            id: 1,
            name: 'Traub Machine',
            process: 'Milling',
            number: 123,
            difficulty: 'medium',
        },
        {
            id: 2,
            name: 'CNC Machine',
            process: 'Turning',
            number: 456,
            difficulty: 'hard',
        },
        {
            id: 1,
            name: 'Traub Machine',
            process: 'Milling',
            number: 123,
            difficulty: 'medium',
        },
        {
            id: 2,
            name: 'CNC Machine',
            process: 'Turning',
            number: 456,
            difficulty: 'hard',
        },
        {
            id: 2,
            name: 'CNC Machine',
            process: 'Turning',
            number: 456,
            difficulty: 'hard',
        },
    ];
    return (
        <div className="h-full w-full p-10">
            <div
                className="h-[100%] w-full px-[40px] flex flex-col overflow-scroll pt-8"
                style={{ boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)' }}
            >
                <div className='flex justify-between'>
                    <p className='ml-12 text-3xl font-bold'>Currently Registered Machines</p>
                    <div>
                        <div
                            style={{ boxShadow: '0px 10px 30px rgba(100, 100, 250, 0.5)' }}
                            onClick={() => {
                                navigate('/createmachines');
                            }}
                            className="h-[50px] w-[200px] rounded-[5px] flex flex-row justify-center items-center text-white font-semibold cursor-pointer transition-all bg-[#473fd3] hover:bg-[#7a89e0]"
                        >
                            Create a Machine
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-wrap gap-16 gap-y-8 p-12">
                    {machines.map((machine) => (
                        <MachineCard key={machine.id} machine={machine} />
                    ))}
                </div>
            </div>
        </div>
    );


};

export default Machines;


