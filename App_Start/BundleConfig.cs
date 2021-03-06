﻿using System.Web;
using System.Web.Optimization;

namespace SpendingsCalculator
{
    public class BundleConfig
    {
        //Дополнительные сведения об объединении см. по адресу: http://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {          
            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));

            bundles.Add(new ScriptBundle("~/Scripts/jsx").Include(
                "~/Scripts/jsx/bundle.js"
                ));

            bundles.Add(new ScriptBundle("~/Scripts/reactjs").Include(                
                "~/Scripts/reactjs/react.js",
                "~/Scripts/reactjs/react-dom.js"
                ));
        }
    }
}
