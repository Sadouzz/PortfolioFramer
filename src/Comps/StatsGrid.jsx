import StatsCard from "./StatsCard"
export default function StatsGrid({stats, type = 'stats'})  {

    return (
        <div className="container-fluid py-5" >
                <div className="row">
                    {stats.map((stat, index) => (
                        <StatsCard
                            key={index}
                            prefix={stat.prefix}
                            title={stat.title}
                            suffix={stat.suffix}
                            content={stat.content}
                            sublabel={stat.sublabel}
                            highlight={stat.highlight}
                            marginTop={stat.marginTop}
                            isWide={stat.isWide}
                            maxHeight={stat.maxHeight}
                            type={type}
                        />
                    ))}
                </div>
        </div>
    );
};
