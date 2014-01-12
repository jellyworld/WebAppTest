
<%@ Page Title="Wordcloud" Language="vb" MasterPageFile="~/Site.Master" AutoEventWireup="false"
    CodeBehind="Wordcloud.aspx.vb" Inherits="WebAppTest.Wordcloud" %>

<asp:Content ID="HeaderContent" runat="server" ContentPlaceHolderID="HeadContent">
</asp:Content>
<asp:Content ID="BodyContent" runat="server" ContentPlaceHolderID="MainContent">
    <h2>
        Wordcloud
    </h2>
    <p>
        <div id="wordcloudcontainer" style="width:100%;overflow:visible;"></div>
        <div id="wordclouddetailscontainer"><h2></h2><div>This is a test <a href="#" id="wordclouddetailscontainerclose">close</a></div></div>
    </p>
    <script src="Scripts/Wordcloud.js" type="text/javascript"></script>
</asp:Content>

    

