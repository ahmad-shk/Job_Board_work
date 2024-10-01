const ProgressBar = ({ Progress }) => {
    return (
        <div className="relative bg-[#EEECEC] rounded-[10px] w-[120px] h-[10px] overflow-hidden">
            <div
                className={`absolute left-0 top-0 h-[100%] ${Progress < 50 ? 'bg-[#EF4242]' : (Progress === 50 ? 'bg-[#02A2FF]' : 'bg-[#56CA8B]')}`}
                style={{ width: `${Progress}%` }}>
            </div>
        </div>
    )
}

export default ProgressBar