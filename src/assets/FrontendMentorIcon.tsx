export default function FrontendMentorIcon({
    color
}: {
    color?: boolean
}) {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3906 10.4854C19.3046 10.4854 19.2196 10.4653 19.141 10.4262L13.9053 7.80353C13.7979 7.74955 13.7068 7.66202 13.6429 7.55146C13.5789 7.44091 13.5449 7.31204 13.5449 7.18037C13.5449 7.0487 13.5789 6.91983 13.6429 6.80928C13.7068 6.69872 13.7979 6.61119 13.9053 6.55722L19.141 3.9436C19.2888 3.87021 19.4565 3.86529 19.6076 3.9299C19.7586 3.99451 19.8806 4.12341 19.9469 4.28839C20.0125 4.45382 20.0168 4.64158 19.9588 4.81054C19.9009 4.97951 19.7855 5.11592 19.6379 5.18991L15.6489 7.18128L19.6387 9.17992C19.7663 9.24355 19.8705 9.35424 19.9338 9.49348C19.9972 9.63272 20.016 9.79208 19.9869 9.94493C19.9579 10.0978 19.8828 10.2348 19.7743 10.3332C19.6658 10.4316 19.5303 10.4853 19.3906 10.4854V10.4854Z" fill={color ? "#67BECE" : 'var(--clr-dark-grey)'}/>
            <path d="M12.255 20C6.49882 20 1.46646 15.6534 0.0196937 9.42916C-0.021071 9.25412 0.00199547 9.06813 0.0838188 8.91211C0.165642 8.75609 0.29952 8.64283 0.456 8.59723C0.612481 8.55162 0.778745 8.57743 0.918219 8.66896C1.05769 8.76049 1.15895 8.91024 1.19971 9.08529C1.83794 11.8212 3.26949 14.243 5.27009 15.9712C7.27068 17.6995 9.72727 18.6365 12.255 18.6355C12.4167 18.6355 12.5719 18.7074 12.6863 18.8353C12.8007 18.9633 12.8649 19.1368 12.8649 19.3178C12.8649 19.4987 12.8007 19.6723 12.6863 19.8002C12.5719 19.9282 12.4167 20 12.255 20V20Z" fill={color ? "#3F54A3" : 'var(--clr-dark-grey)'}/>
            <path d="M10.1539 14.3344C9.99212 14.3344 9.83698 14.2625 9.72259 14.1345C9.60821 14.0066 9.54395 13.833 9.54395 13.6521V0.682286C9.54395 0.501333 9.60821 0.32779 9.72259 0.199837C9.83698 0.0718835 9.99212 0 10.1539 0C10.3156 0 10.4708 0.0718835 10.5852 0.199837C10.6996 0.32779 10.7638 0.501333 10.7638 0.682286V13.6521C10.7638 13.833 10.6996 14.0066 10.5852 14.1345C10.4708 14.2625 10.3156 14.3344 10.1539 14.3344Z" fill={color ? "#67BECE" : 'var(--clr-dark-grey)'}/>
        </svg>
    )
}