// m-1 using try catch
// const asyncHandler = (fn) => {async () => {}}

// const asyncHandler = (fn) => async (req,res,next) => {
//     try {
//         await fn(req,res,next) 
//     }
//     catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: error.messgae
//         })
//     }
// }  

// m-2 using promises

const asyncHandler = (requestHandler) => {
    (req,res,next) => {
        Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    }
}

export {asyncHandler}