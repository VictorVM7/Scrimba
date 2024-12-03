import ChefClaudeLogo from '/images/chef-claude-logo.png'

export default function Header() {
    return (
        <>
            <header>
                <div className='justify-items-center'>
                    <img src={ChefClaudeLogo} alt={ChefClaudeLogo} />
                </div>
            </header>
        </>
    )
}