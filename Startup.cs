using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SpendingsCalculator.Startup))]
namespace SpendingsCalculator
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
