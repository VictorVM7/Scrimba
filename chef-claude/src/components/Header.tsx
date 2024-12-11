import ChefClaudeLogo from '/images/chef-claude-logo.png'

export default function Header() {
    return (
        <header className='justify-items-center shadow-md p-4'>
            <div>
                <img src={ChefClaudeLogo} alt={ChefClaudeLogo} />
            </div>
        </header>
    )
}