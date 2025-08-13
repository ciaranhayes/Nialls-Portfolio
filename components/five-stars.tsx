import { StarIcon } from '@heroicons/react/20/solid'

export default function FiveStars() {
    return(
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <StarIcon
                    key={i}
                    aria-hidden="true"
                    className="w-5 h-5 text-[#38d586] flex-shrink-0"
                />
            ))}
        </div>
    )
}
