function Intro() {
    return (
        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">
                Gil Hwang
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium">
                Software Developer
            </p>
            <p className="text-sm max-w-xl mb-6 font-bold">
                Hello this is my bio. I am studying Computer Engineering in University of Toronto. Check out my Linkedin page:
                {' '}
                <a
                    href="https://www.linkedin.com/in/gil-hwang/"
                    target='_blank'
                    className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
                    rel='noreferrer nooperner'
                >
                    Gil Hwang's Linkedin
                </a>
                {' '}
                for more information.
            </p>
            
        </div>
    )
}

export default Intro;