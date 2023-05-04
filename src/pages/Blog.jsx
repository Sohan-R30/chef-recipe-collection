/* eslint-disable no-unused-vars */
import React from 'react';
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();

const Blog = () => {
    return (
        <>
        <div className='text-center text-3xl my-10 ' ref={ref}>
            <h2 className='mb-5'>Our Blogs here..</h2>
            <div className='text-justify border-2 w-3/4 mx-auto m-10 p-10 rounded-lg break-words'>
                <div>
                    <p className='text-2xl font-bold pb-2'>1. Tell us the differences between uncontrolled and controlled components.</p>
                    <p className='pb-2 pl-4'>
                        A controlled component is bound to a value, and its changes will be handled in code by using event-based callbacks.
                    </p>
                    <p className='pl-4'>
                        It is similar to the traditional HTML form inputs. Here, the form data is handled by the DOM itself. It maintains their own state and will be updated when the input value changes.
                    </p>
                </div>
                <div className='mt-10'>
                    <p className='text-2xl font-bold pb-2 '>2. How to validate React props using PropTypes</p>
                    <p className='pl-4'>
                        propTypes is used to verify the input type for props in react. If you try to put any other type, then it will give you warning in console.
                        In latest react installation as we have done, we don’t need to install propTypes library.
                    </p>
                </div>
                <div className='mt-10'>
                    <p className='text-2xl font-bold pb-2 '>3. Tell us the difference between nodejs and express js.</p>
                    <p className='pl-4 pb-2 '>
                        Node.js is a run-time environment for building server-side event-driven i/o application using javascript.
                    </p>
                    <p className='pl-4'>
                        Express.js is a framework based on node.js for building web-application using principles and approaches of node.js
                    </p>
                </div>
                <div className='mt-10'>
                    <p className='text-2xl font-bold pb-2'>4. What is a custom hook, and why will you create a custom hook?</p>
                    <p className='pl-4 pb-2 '>
                        Custom Hooks are functions. Usually, they start with the word “use”
                    </p>
                    <p className='pl-4'>
                    The primary benefit of writing and using a custom hook is that you don’t have to repeat the same logic in many places of your application. Repetition often breaks the DRY rule and makes your application more difficult to manage. Custom hooks are helpful utilities that help you reuse code logic.
                    </p>
                </div>
            </div>
        </div>
        <div className='flex  justify-center mx-auto m-10'>
            <ReactToPdf targetRef={ref} filename="chefs-collection.pdf">
                {({ toPdf }) => <button className='bg-primaryColor hover:bg-[#4b7bec] text-white text-xl font-bold text-center p-3 rounded-lg' onClick={toPdf}>Download Information</button>}
            </ReactToPdf>
        </div>
    </>
    );
};

export default Blog;